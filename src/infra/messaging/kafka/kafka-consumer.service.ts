import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['leading-sparrow-7335-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bGVhZGluZy1zcGFycm93LTczMzUkT69L9fkuTB3KOYnQlmAachcyfcah5mdeqP4',
          password:
            'QixhviyeVpY91VdYlwhHAc9Dsz4hTbj1gaG0Swm6TEbW6-VxyZFKO343UXwnUtsJJE73hA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
