import { Injectable } from '@nestjs/common';
import headToHeadData from '../data/headtohead.json';

interface HeadToHeadPlayer {
  country: { code: string };
  data: {
    last: number[];
    weight: number;
    height: number;
  };
}

interface HeadToHead {
  players: HeadToHeadPlayer[];
}

const headToHead = headToHeadData as HeadToHead;

@Injectable()
export class StatsService {
  getStats() {
    return {
      countryWithHighestWinRatio: this.getCountryWithHighestWinRatio(),
      averageIMC: this.getAverageIMC(),
      medianPlayerHeight: this.getmedianPlayerHeight(),
    };
  }

  private getCountryWithHighestWinRatio(): string {
    const countryStats = headToHead.players.reduce(
      (acc, player) => {
        const countryCode = player.country.code;
        const wins = player.data.last.filter((result) => result === 1).length;
        const matches = player.data.last.length;

        if (!acc[countryCode]) {
          acc[countryCode] = { wins: 0, matches: 0 };
        }

        acc[countryCode].wins += wins;
        acc[countryCode].matches += matches;

        return acc;
      },
      {} as Record<string, { wins: number; matches: number }>,
    );

    return Object.entries(countryStats)
      .map(([countryCode, stats]) => ({
        countryCode,
        ratio: stats.wins / stats.matches,
      }))
      .sort((a, b) => b.ratio - a.ratio)[0].countryCode;
  }

  private getAverageIMC(): number {
    const totalIMC = headToHead.players.reduce((sum, player) => {
      const weightInKg = player.data.weight / 1000;
      const heightInMeters = player.data.height / 100;

      return sum + weightInKg / (heightInMeters * heightInMeters);
    }, 0);

    return Number((totalIMC / headToHead.players.length).toFixed(2));
  }

  private getmedianPlayerHeight(): number {
    const sortedHeights = [...headToHead.players]
      .map((player) => player.data.height)
      .sort((a, b) => a - b);

    const middleIndex = Math.floor(sortedHeights.length / 2);

    if (sortedHeights.length % 2 === 0) {
      return (sortedHeights[middleIndex - 1] + sortedHeights[middleIndex]) / 2;
    }

    return sortedHeights[middleIndex];
  }
}
