import { Injectable } from '@nestjs/common';
import * as headToHead from '../data/headtohead.json';

@Injectable()
export class PlayersService {
  getAllPlayers() {
    return headToHead.players.sort((a, b) => a.data.rank - b.data.rank);
  }
}
