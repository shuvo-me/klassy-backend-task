import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CouponService } from './coupon.service';
import { Coupon } from 'src/schemas/coupon.shema';

@Controller('coupons')
export class CouponController {
  constructor(private couponService: CouponService) {}
  @Post()
  async createCoupon(@Body() coupon: any): Promise<Coupon> {
    return await this.couponService.createCoupon(coupon);
  }

  @Put(':id')
  async updateCoupon(
    @Param('id') id: string,
    @Body() coupon: any,
  ): Promise<Coupon> {
    return await this.couponService.updateCoupon(id, coupon);
  }

  @Get()
  async getCoupons(): Promise<Coupon[]> {
    return this.couponService.getCoupons();
  }

  @Get(':id')
  async getCouponById(@Param('id') id: string): Promise<Coupon> {
    return await this.couponService.getCoupon(id);
  }

  @Delete(':id')
  async deleteCouponById(@Param('id') id: string): Promise<Coupon> {
    return await this.couponService.deleteCoupon(id);
  }
}
