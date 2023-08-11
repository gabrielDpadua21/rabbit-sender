import { Connection } from '@eduzz/rabbit';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RequestDto } from './dto/requestDto';

@Injectable()
export class RabbitService {
  private connection: Connection = null;

  constructor(private readonly configService: ConfigService) {}

  getConnection(): Connection {
    if (!this.connection) {
      this.connection = new Connection({
        dsn: this.configService.get<string>('RABBIT_DSN'),
        exchange: this.configService.get<string>('RABBIT_EXCHANGE'),
        connectionName: this.configService.get<string>(
          'RABBIT_CONNECTION_NAME',
        ),
      });
    }
    return this.connection;
  }

  async publish(request: RequestDto): Promise<void> {
    const connection = this.getConnection();
    await connection.topic(request.topic).persistent().send({
      payload: request.body,
    });
  }
}
