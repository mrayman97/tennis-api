import { Test, TestingModule } from '@nestjs/testing';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

const mockStats = {
  countryWithHighestWinRatio: 'SRB',
  averageIMC: 23.36,
  medianPlayerHeight: 185,
};

const mockStatsService = {
  getStats: jest.fn().mockReturnValue(mockStats),
};

describe('StatsController', () => {
  let controller: StatsController;

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatsController],
      providers: [{ provide: StatsService, useValue: mockStatsService }],
    }).compile();

    controller = module.get<StatsController>(StatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getStats', () => {
    it('calls service.getStats and returns the result', () => {
      const result = controller.getStats();
      expect(mockStatsService.getStats).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockStats);
    });
  });
});
