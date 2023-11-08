using Jitterbit_Service_Worker.RabbitMQ;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using MongoDB.Driver.Core.Bindings;
using Newtonsoft.Json;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Diagnostics.Tracing;
using System.Text;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;
using Worker.Core.Services;
using Worker.Domain.Calculation;
using Worker.Domain.RabbitMQ;

namespace Jitterbit.Service.Worker.RabbitMQ
{
	public class ProcessMessageConsumer : BackgroundService
	{
		private readonly RabbitMqConfiguration configuration;
		private readonly IConnection connection;
		private readonly IModel channel;
        private readonly ILogger<Worker> logger;
        private readonly CalculationService calculationService;
        public ProcessMessageConsumer(
			IOptions<RabbitMqConfiguration> option,
            ILogger<Worker> logger)
		{
			configuration = option.Value;
			this.logger = logger;
			calculationService = new CalculationService();

			var factory = new ConnectionFactory
			{
				HostName = configuration.Host,
            };

			connection = factory.CreateConnection();
			channel = connection.CreateModel();
			channel.QueueDeclare(
				queue: configuration.Queue, 
				durable: false, 
				exclusive: false, 
				autoDelete: false, 
				arguments: null);
		}
		protected override Task ExecuteAsync(CancellationToken stoppingToken)
		{
			var consumer = new EventingBasicConsumer(channel);

			consumer.Received += async (sender, eventArgs) =>
			{
				var contentArray = eventArgs.Body.ToArray();
				var contentstring = Encoding.UTF8.GetString(contentArray);

				var message = JsonConvert.DeserializeObject<MessageInputModel>(contentstring);
                logger.LogInformation("Received message at " + DateTime.UtcNow.ToLongTimeString());
                logger.LogInformation("Content ==> " + contentstring);

				await calculationService.sum(message.FromId);

                channel.BasicAck(eventArgs.DeliveryTag, false);
			};

			channel.BasicConsume(configuration.Queue, false, consumer);
			return Task.CompletedTask;
		}
	} 
}