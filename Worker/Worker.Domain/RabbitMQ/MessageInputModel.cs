using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Worker.Domain.RabbitMQ
{
    public class MessageInputModel
    {
        public string? FromId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
	}
}
