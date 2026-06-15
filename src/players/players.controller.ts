/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

	@Get()
	getAllPlayers() {
		return this.playersService.getAllPlayers();
	}

	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: string) {
		return this.playersService.findOne(Number(id));
	}
}
