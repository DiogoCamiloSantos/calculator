using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;
using Worker.Domain.Calculation;

namespace Worker.Persistence.Repositories
{
    public class CalculationRepository
    {
		private	IMongoCollection<Calculation> calculationsCollection;
		private readonly string DATABASE_URI = "MONGODB_URI";

        public CalculationRepository()
        {
			var connectionString = "mongodb://localhost:27017";

            if (connectionString == null)
			{
				Console.WriteLine("You must set your 'MONGODB_URI' environment variable. To learn how to set it, see https://www.mongodb.com/docs/drivers/csharp/current/quick-start/#set-your-connection-string");
				Environment.Exit(0);
			}

			var client = new MongoClient(connectionString);
			calculationsCollection = client.GetDatabase("test").GetCollection<Calculation>("calculations");
		}

		public async Task<Calculation> FindBy(string id)
		{
			var calculations = await calculationsCollection.Find(x => x.id == id).ToListAsync();
			return calculations.First();
		}

		public async Task update(Calculation calculation)
		{
			await calculationsCollection.ReplaceOneAsync(x => x.id == calculation.id, calculation);
		}
	}
}
