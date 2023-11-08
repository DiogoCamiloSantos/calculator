using Worker.Core.Services;
using RabbitMQ.Client;
using System.Net.Http.Json;
using MongoDB.Bson.IO;
using Newtonsoft.Json;
using Worker.Domain.RabbitMQ;
using System.Text;

namespace Jitterbit.Service.Worker
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        private readonly CalculationService calculationService;

        private readonly ConnectionFactory connectionFactory;
        private const string QUEUE_NAME = "_messages";

		public Worker(ILogger<Worker> logger)
        {
            _logger = logger;
            calculationService = new CalculationService();
			connectionFactory = new ConnectionFactory
				{
				HostName = "localhost"
			};
		}

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
			using (var connection = connectionFactory.CreateConnection())
			{
				using (var channel = connection.CreateModel())
				{		
				}
			}

			await calculationService.sum("6546b56d513343ea57223705");

		}
    }
}