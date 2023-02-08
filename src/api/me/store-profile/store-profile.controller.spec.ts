import { Test, TestingModule } from '@nestjs/testing';
import { StoreProfileController } from './store-profile.controller';
import { StoreProfileService } from './store-profile.service';

describe('StoreProfileController', () => {
  let controller: StoreProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreProfileController],
      providers: [StoreProfileService],
    }).compile();

    controller = module.get<StoreProfileController>(StoreProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
