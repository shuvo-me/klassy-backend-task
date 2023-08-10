import { Module } from '@nestjs/common';
import { CouponController } from './coupon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponSchema } from 'src/schemas/coupon.shema';
import { CouponService } from './coupon.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Coupon',
        schema: CouponSchema,
      },
    ]),
  ],
  providers: [CouponService],
  controllers: [CouponController],
})
export class CouponModule {}
