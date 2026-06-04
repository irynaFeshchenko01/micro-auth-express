import {
  IsArray,
  IsInt,
  IsString,
  ArrayNotEmpty,
  IsBoolean,
  IsNumber,
} from "class-validator";

export class ResponseUserDto {
  @IsNumber()
  id!: number;

  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsBoolean()
  isActive!: boolean;

  @IsString()
  email!: string;

  @IsString()
  phone!: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  roles!: number[];
}


