import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';

@ApiTags('players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all players sorted by rank' })
  @ApiResponse({
    status: 200,
    description: 'List of all players sorted by rank ascending.',
  })
  getAllPlayers() {
    return this.playersService.getAllPlayers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a player by id' })
  @ApiParam({ name: 'id', type: Number, example: 52 })
  @ApiResponse({ status: 200, description: 'Player found.' })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  getPlayerById(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.getPlayerById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new player' })
  @ApiBody({ type: CreatePlayerDto })
  @ApiResponse({ status: 201, description: 'Player created successfully.' })
  @ApiResponse({
    status: 400,
    description: 'Validation error — invalid or missing fields.',
  })
  @ApiResponse({
    status: 409,
    description: 'A player with this id already exists.',
  })
  createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.createPlayer(createPlayerDto);
  }
}
