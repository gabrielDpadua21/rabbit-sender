import { IsNotEmpty, IsString } from 'class-validator';

export class RequestDto {
  @IsNotEmpty()
  @IsString()
  topic: string;

  body: any;
}
