using Jitterbit.Service.Worker;
using Jitterbit.Service.Worker.RabbitMQ;
using Jitterbit.Service.Worker.MongoDB;
using Jitterbit_Service_Worker.RabbitMQ;

IHost host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
		Host.CreateDefaultBuilder(args)
			.ConfigureServices((hostContext, services) => {
				IConfiguration configuration = hostContext.Configuration;

                services.Configure<RabbitMqConfiguration>(options => configuration.GetSection("RabbitMQConfig").Bind(options));
				services.AddHostedService<ProcessMessageConsumer>();

		}).Start();
    })
    .Build();

host.Run();
