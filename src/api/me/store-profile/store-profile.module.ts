import { Module } from '@nestjs/common';
import { StoreProfileService } from './store-profile.service';
import { StoreProfileController } from './store-profile.controller';

@Module({
  controllers: [StoreProfileController],
  providers: [StoreProfileService]
})
export class StoreProfileModule {}
