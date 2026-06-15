import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  getAllPlayers() {
    return this.playersService.getAllPlayers();
  }

  @Get(':id')
  getPlayerById(@Param('id', ParseIntPipe) id: string) {
    return this.playersService.getPlayerById(Number(id));
  }

  @Post()
  createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.createPlayer(createPlayerDto);
  }
}
