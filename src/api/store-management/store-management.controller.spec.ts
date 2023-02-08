import { Test, TestingModule } from '@nestjs/testing';
import { StoreManagementController } from './store-management.controller';
import { StoreManagementService } from './store-management.service';

describe('StoreManagementController', () => {
  let controller: StoreManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreManagementController],
      providers: [StoreManagementService],
    }).compile();

    controller = module.get<StoreManagementController>(StoreManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
