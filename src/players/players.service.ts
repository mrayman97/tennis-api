import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as headToHead from '../data/headtohead.json';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayersService {
  private readonly players = [...headToHead.players];

  getAllPlayers() {
    return [...this.players].sort(
      (playerA, playerB) => playerA.data.rank - playerB.data.rank,
    );
  }

  getPlayerById(id: number) {
    const player = this.players.find((player) => player.id === id);

    if (!player) {
      throw new NotFoundException(`Player with id ${id} not found`);
    }

    return player;
  }

  createPlayer(createPlayerDto: CreatePlayerDto) {
    const playerAlreadyExists = this.players.some(
      (player) => player.id === createPlayerDto.id,
    );

    if (playerAlreadyExists) {
      throw new ConflictException(
        `Player with id ${createPlayerDto.id} already exists`,
      );
    }

    this.players.push(createPlayerDto);

    return createPlayerDto;
  }
}
