import { Test, TestingModule } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';

const mockPlayer = { id: 52, lastname: 'Djokovic', data: { rank: 2 } };

const mockPlayersService = {
  getAllPlayers: jest.fn().mockReturnValue([mockPlayer]),
  getPlayerById: jest.fn().mockReturnValue(mockPlayer),
  createPlayer: jest.fn().mockReturnValue(mockPlayer),
};

describe('PlayersController', () => {
  let controller: PlayersController;

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [{ provide: PlayersService, useValue: mockPlayersService }],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllPlayers', () => {
    it('calls service.getAllPlayers and returns the result', () => {
      const result = controller.getAllPlayers();
      expect(mockPlayersService.getAllPlayers).toHaveBeenCalledTimes(1);
      expect(result).toEqual([mockPlayer]);
    });
  });

  describe('getPlayerById', () => {
    it('calls service.getPlayerById with the numeric id', () => {
      const result = controller.getPlayerById(52);
      expect(mockPlayersService.getPlayerById).toHaveBeenCalledWith(52);
      expect(result).toEqual(mockPlayer);
    });
  });

  describe('createPlayer', () => {
    it('calls service.createPlayer with the dto and returns the result', () => {
      const dto = { id: 52 } as CreatePlayerDto;
      const result = controller.createPlayer(dto);
      expect(mockPlayersService.createPlayer).toHaveBeenCalledWith(dto);
      expect(result).toEqual(mockPlayer);
    });
  });
});
