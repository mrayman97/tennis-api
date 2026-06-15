import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [PlayersModule, StatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
