import { Test, TestingModule } from '@nestjs/testing';
import { StatsService } from './stats.service';

describe('StatsService', () => {
  let service: StatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatsService],
    }).compile();

    service = module.get<StatsService>(StatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getStats', () => {
    it('returns an object with the three expected keys', () => {
      const stats = service.getStats();
      expect(stats).toHaveProperty('countryWithHighestWinRatio');
      expect(stats).toHaveProperty('averageIMC');
      expect(stats).toHaveProperty('medianPlayerHeight');
    });

    it('returns SRB as the country with the highest win ratio (Djokovic 5/5)', () => {
      const { countryWithHighestWinRatio } = service.getStats();
      expect(countryWithHighestWinRatio).toBe('SRB');
    });

    it('returns the correct average BMI rounded to 2 decimals', () => {
      const { averageIMC } = service.getStats();
      expect(averageIMC).toBe(23.36);
    });

    it('returns 185 as the median player height', () => {
      const { medianPlayerHeight } = service.getStats();
      expect(medianPlayerHeight).toBe(185);
    });
  });
});
