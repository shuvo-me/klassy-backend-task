import {
  Body,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Coupon } from 'src/schemas/coupon.shema';

@Injectable()
export class CouponService {
  constructor(
    @InjectModel(Coupon.name)
    private couponModel: mongoose.Model<Coupon>,
  ) {}

  async getCoupons(): Promise<Coupon[]> {
    return await this.couponModel.find();
  }

  async getCoupon(id: string): Promise<Coupon> {
    return await this.couponModel.findById(id);
  }

  async createCoupon(coupon: Coupon): Promise<Coupon> {
    return await this.couponModel.create(coupon);
  }

  async updateCoupon(id: string, coupon: Coupon): Promise<Coupon> {
    return await this.couponModel.findByIdAndUpdate(id, coupon, {
      new: true,
      runValidators: true,
    });
  }

  async deleteCoupon(id: string): Promise<Coupon> {
    return await this.couponModel.findByIdAndDelete(id);
  }
}
