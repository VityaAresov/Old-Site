import { IsEmail, IsNotEmpty } from 'class-validator';

export class SendContactDto {
  @IsNotEmpty()
  readonly fullName: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly phone: string;

  readonly message: string;
}
