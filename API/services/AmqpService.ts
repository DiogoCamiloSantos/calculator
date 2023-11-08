import { connect } from 'amqplib/callback_api';
import { AmqpQueueName } from '../models/Amqp/Amqp.enum';

export class AmqpService {

    constructor() {
    }

    sendMessageToQueue(message: Object, queue: AmqpQueueName) {
        connect('amqp://localhost', (error0, connection) => {
            if (error0) {
                throw error0;
            }

            connection.createChannel((error1, channel) => {
                if (error1) {
                    throw error1;
                }

                channel.assertQueue(queue, {
                    durable: false
                });

                channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
                console.log(" [x] Sent %s", message);
            });
        });
    }
}
