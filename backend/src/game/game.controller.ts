import { Body, Controller, Get, Post } from '@nestjs/common';

import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  getGameData() {
    return this.gameService.getGameData();
  }

  @Post('play')
  playGame() {
    return this.gameService.playGame();
  }

  @Post('reset')
  resetGame() {
    return this.gameService.resetGame();
  }

  @Post('reward')
  claimReward(@Body() body: { reward: string }) {
    return this.gameService.claimReward(body.reward);
  }
}
