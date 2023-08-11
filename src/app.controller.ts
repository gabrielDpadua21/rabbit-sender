import { Body, Controller, Get, Post } from '@nestjs/common';
import { RabbitService } from './rabbit/rabbit.service';
import { RequestDto } from './rabbit/dto/requestDto';

@Controller()
export class AppController {
  constructor(private readonly rabbitService: RabbitService) {}

  @Get()
  async getHello(): Promise<string> {
    return 'is on';
  }

  @Post('/send')
  async publisheMessage(@Body() request: RequestDto): Promise<boolean> {
    await this.rabbitService.publish(request);
    return true;
  }
}
