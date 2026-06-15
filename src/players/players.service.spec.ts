import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';

const newPlayer: CreatePlayerDto = {
  id: 999,
  firstname: 'Roger',
  lastname: 'Federer',
  shortname: 'R.FED',
  sex: 'M',
  country: { picture: 'https://example.com/sui.png', code: 'SUI' },
  picture: 'https://example.com/federer.png',
  data: {
    rank: 3,
    points: 2000,
    weight: 85000,
    height: 185,
    age: 37,
    last: [1, 1, 0, 1, 1],
  },
};

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersService],
    }).compile();

    service = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllPlayers', () => {
    it('returns all players', () => {
      const players = service.getAllPlayers();
      expect(players).toHaveLength(5);
    });

    it('returns players sorted by rank ascending', () => {
      const players = service.getAllPlayers();
      const ranks = players.map((p) => p.data.rank);
      expect(ranks).toEqual([...ranks].sort((a, b) => a - b));
    });

    it('first player has rank 1 (Nadal)', () => {
      const [first] = service.getAllPlayers();
      expect(first.data.rank).toBe(1);
      expect(first.id).toBe(17);
    });
  });

  describe('getPlayerById', () => {
    it('returns the correct player for a valid id', () => {
      const player = service.getPlayerById(52);
      expect(player.id).toBe(52);
      expect(player.lastname).toBe('Djokovic');
    });

    it('throws NotFoundException for an unknown id', () => {
      expect(() => service.getPlayerById(9999)).toThrow(NotFoundException);
    });

    it('throws NotFoundException with a message containing the id', () => {
      expect(() => service.getPlayerById(9999)).toThrow('9999');
    });
  });

  describe('createPlayer', () => {
    it('returns the created player', () => {
      const created = service.createPlayer(newPlayer);
      expect(created).toEqual(newPlayer);
    });

    it('makes the new player retrievable by id', () => {
      service.createPlayer(newPlayer);
      const found = service.getPlayerById(999);
      expect(found.id).toBe(999);
    });

    it('throws ConflictException when id already exists', () => {
      expect(() => service.createPlayer({ ...newPlayer, id: 52 })).toThrow(ConflictException);
    });
  });
});
