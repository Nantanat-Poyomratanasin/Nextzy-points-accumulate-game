import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async getGameData() {
    const user = await this.prisma.user.findFirst();

    const playHistory = await this.prisma.playHistory.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    const rewardHistory = await this.prisma.rewardHistory.findMany({
      orderBy: {
        claimedAt: 'desc',
      },
    });

    return {
      totalScore: user?.totalScore ?? 0,
      playHistory,
      rewardHistory,
    };
  }
}
