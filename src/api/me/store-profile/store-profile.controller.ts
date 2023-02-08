import { Controller, Get } from '@nestjs/common';
import { StoreProfileService } from './store-profile.service';

@Controller({ path: 'store/profile' })
export class StoreProfileController {
  constructor(private readonly storeProfileService: StoreProfileService) {}

  @Get('')
  findAll() {
    return this.storeProfileService.findAll();
  }
}
