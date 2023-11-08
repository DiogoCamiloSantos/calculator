using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Worker.Domain.Calculation
{
    public class Calculation
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? id { get; private set; }
        [BsonElement("number1")]
        public int number1 { get; set; }
		[BsonElement("number2")]
		public int number2 { get; set; }
		[BsonElement("result")]
		public int result { get; set; }

		[BsonElement("status")]
		private CalculationStatusEnum status;

        [BsonElement("createdAt")]
        private DateTime createdAt;

        [BsonElement("updatedAt")]
        private DateTime updatedAt;

        public bool HasCalculationDone 
		{ 
			get 
			{ 
				return status == CalculationStatusEnum.Done; 
			} 
		}
		public void SetCalculationAsDone()
		{
			status = CalculationStatusEnum.Done;
		}
	}
}