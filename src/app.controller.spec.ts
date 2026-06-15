import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import type { Response } from 'express';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should call res.send with HTML content', () => {
      const mockRes = { send: jest.fn() } as unknown as Response;
      appController.getHome(mockRes);
      expect(mockRes.send).toHaveBeenCalledWith(
        expect.stringContaining('<h1>'),
      );
    });
  });
});
