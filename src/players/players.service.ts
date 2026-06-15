import { Injectable, NotFoundException } from '@nestjs/common';
import * as headToHead from '../data/headtohead.json';

@Injectable()
export class PlayersService {
  getAllPlayers() {
    return [...headToHead.players].sort(
      (playerA, playerB) => playerA.data.rank - playerB.data.rank,
    );
  }

  findOne(id: number) {
    const player = headToHead.players.find((player) => player.id === id);

    if (!player) {
      throw new NotFoundException(`Player with id ${id} not found`);
    }

    return player;
  }
}
