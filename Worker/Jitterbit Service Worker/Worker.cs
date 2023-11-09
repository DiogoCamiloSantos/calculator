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

		public Worker(ILogger<Worker> logger)
        {
            _logger = logger;
		}

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {

		}
    }
}