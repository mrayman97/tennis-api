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
import { ApiProperty } from '@nestjs/swagger';

export class CountryDto {
  @ApiProperty({ example: 'https://tenisu.latelier.co/resources/Serbie.png' })
  @IsString()
  @IsNotEmpty()
  picture!: string;

  @ApiProperty({ example: 'SRB' })
  @IsString()
  @IsNotEmpty()
  code!: string;
}

export class PlayerDataDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  rank!: number;

  @ApiProperty({ example: 1982 })
  @IsInt()
  points!: number;

  @ApiProperty({ example: 85000, description: 'Weight in grams' })
  @IsInt()
  weight!: number;

  @ApiProperty({ example: 185, description: 'Height in centimeters' })
  @IsInt()
  height!: number;

  @ApiProperty({ example: 33 })
  @IsInt()
  age!: number;

  @ApiProperty({
    type: [Number],
    example: [1, 0, 0, 0, 1],
    description: '1 = win, 0 = loss',
  })
  @IsArray()
  last!: number[];
}

export class CreatePlayerDto {
  @ApiProperty({ example: 17 })
  @IsInt()
  id!: number;

  @ApiProperty({ example: 'Rafael' })
  @IsString()
  firstname!: string;

  @ApiProperty({ example: 'Nadal' })
  @IsString()
  lastname!: string;

  @ApiProperty({ example: 'R.NAD' })
  @IsString()
  shortname!: string;

  @ApiProperty({ enum: ['M', 'F'], example: 'M' })
  @IsIn(['M', 'F'])
  sex!: string;

  @ApiProperty({ type: () => CountryDto })
  @ValidateNested()
  @Type(() => CountryDto)
  country!: CountryDto;

  @ApiProperty({ example: 'https://tenisu.latelier.co/resources/Nadal.png' })
  @IsString()
  picture!: string;

  @ApiProperty({ type: () => PlayerDataDto })
  @ValidateNested()
  @Type(() => PlayerDataDto)
  data!: PlayerDataDto;
}
