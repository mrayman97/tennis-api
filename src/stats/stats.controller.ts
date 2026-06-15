import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StatsService } from './stats.service';

@ApiTags('stats')
@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get()
  @ApiOperation({ summary: 'Get global tennis statistics' })
  @ApiResponse({
    status: 200,
    description:
      'Country with highest win ratio, average IMC, and median player height.',
  })
  getStats() {
    return this.statsService.getStats();
  }
}
