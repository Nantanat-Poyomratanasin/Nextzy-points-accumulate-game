import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async getGameData() {
    let gameState = await this.prisma.gameState.findFirst();

    if (!gameState) {
      gameState = await this.prisma.gameState.create({
        data: {
          totalScore: 0,
        },
      });
    }

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
      totalScore: gameState.totalScore,
      playHistory,
      rewardHistory,
    };
  }
  async playGame() {
    const scoreOptions = [300, 500, 1000, 3000];

    const randomScore =
      scoreOptions[Math.floor(Math.random() * scoreOptions.length)];

    let gameState = await this.prisma.gameState.findFirst();

    if (!gameState) {
      gameState = await this.prisma.gameState.create({
        data: {
          totalScore: 0,
        },
      });
    }

    if (gameState.totalScore >= 10000) {
      throw new BadRequestException('คะแนนสะสมครบ 10000 แล้ว');
    }

    const updatedGameState = await this.prisma.gameState.update({
      where: {
        id: gameState.id,
      },
      data: {
        totalScore: Math.min(gameState.totalScore + randomScore, 10000),
      },
    });

    await this.prisma.playHistory.create({
      data: {
        score: randomScore,
      },
    });

    return {
      score: randomScore,
      totalScore: updatedGameState.totalScore,
    };
  }

  async resetGame() {
    const gameState = await this.prisma.gameState.findFirst();

    if (gameState) {
      await this.prisma.gameState.update({
        where: {
          id: gameState.id,
        },
        data: {
          totalScore: 0,
        },
      });
    }

    await this.prisma.playHistory.deleteMany();

    await this.prisma.rewardHistory.deleteMany();

    return {
      message: 'Game reset successfully',
    };
  }

  async claimReward(reward: string) {
    const gameState = await this.prisma.gameState.findFirst();

    if (!gameState) {
      throw new NotFoundException('Game state not found');
    }

    const rewardLevels = {
      A: 5000,
      B: 7500,
      C: 10000,
    };

    const requiredScore = rewardLevels[reward as keyof typeof rewardLevels];

    if (!requiredScore) {
      throw new BadRequestException('Invalid reward');
    }

    if (gameState.totalScore < requiredScore) {
      throw new BadRequestException('Not enough score');
    }

    const existingReward = await this.prisma.rewardHistory.findFirst({
      where: {
        reward,
      },
    });

    if (existingReward) {
      throw new BadRequestException('Reward already claimed');
    }

    const rewardHistory = await this.prisma.rewardHistory.create({
      data: {
        reward,
      },
    });

    return {
      message: 'Reward claimed successfully',
      reward: rewardHistory.reward,
    };
  }
}
