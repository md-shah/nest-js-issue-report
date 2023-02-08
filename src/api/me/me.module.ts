import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { StoreProfileModule } from './store-profile/store-profile.module';

@Module({
  imports: [ProfileModule, StoreProfileModule],
})
export class MeModule {}
