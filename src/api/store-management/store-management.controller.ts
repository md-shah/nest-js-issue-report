import { Controller, Get } from '@nestjs/common';
import { StoreManagementService } from './store-management.service';

@Controller('store/management')
export class StoreManagementController {
  constructor(
    private readonly storeManagementService: StoreManagementService,
  ) {}

  @Get('')
  findAll() {
    return this.storeManagementService.findAll();
  }
}
