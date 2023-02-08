import { Module } from '@nestjs/common';
import { MeModule } from './me/me.module';
import { StoreManagementModule } from './store-management/store-management.module';

@Module({
  imports: [MeModule, StoreManagementModule],
})
export class ApiModule {}
