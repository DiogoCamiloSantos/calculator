using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Worker.Domain.Calculation
{
    public enum CalculationStatusEnum
    {
		[BsonRepresentation(BsonType.Int32)]
		Pending = 0,
		[BsonRepresentation(BsonType.Int32)]
		Done = 1,
		[BsonRepresentation(BsonType.Int32)]
		Error = 2
	}
}
