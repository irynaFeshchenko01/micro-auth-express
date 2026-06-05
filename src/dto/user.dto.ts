import {
  IsArray,
  IsInt,
  IsString,
  ArrayNotEmpty,
  IsBoolean,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsBoolean()
  isActive!: boolean;

  @IsString()
  email!: string;

  @IsString()
  password!: string;

  @IsString()
  phone!: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  roleIds!: number[];
}
