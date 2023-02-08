import { Module } from '@nestjs/common';
import { StoreManagementService } from './store-management.service';
import { StoreManagementController } from './store-management.controller';

@Module({
  controllers: [StoreManagementController],
  providers: [StoreManagementService]
})
export class StoreManagementModule {}
