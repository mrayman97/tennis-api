import {
  IsArray,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class CountryDto {
  @IsString()
  @IsNotEmpty()
  picture!: string;

  @IsString()
  @IsNotEmpty()
  code!: string;
}

class PlayerDataDto {
  @IsInt()
  @Min(1)
  rank!: number;

  @IsInt()
  points!: number;

  @IsInt()
  weight!: number;

  @IsInt()
  height!: number;

  @IsInt()
  age!: number;

  @IsArray()
  last!: number[];
}

export class CreatePlayerDto {
  @IsInt()
  id!: number;

  @IsString()
  firstname!: string;

  @IsString()
  lastname!: string;

  @IsString()
  shortname!: string;

  @IsIn(['M', 'F'])
  sex!: string;

  @ValidateNested()
  @Type(() => CountryDto)
  country!: CountryDto;

  @IsString()
  picture!: string;

  @ValidateNested()
  @Type(() => PlayerDataDto)
  data!: PlayerDataDto;
}
