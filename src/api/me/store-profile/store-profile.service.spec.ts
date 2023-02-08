import { Test, TestingModule } from '@nestjs/testing';
import { StoreProfileService } from './store-profile.service';

describe('StoreProfileService', () => {
  let service: StoreProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreProfileService],
    }).compile();

    service = module.get<StoreProfileService>(StoreProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
