import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Coupon {
  @Prop()
  name: string;
  @Prop()
  code: string;
  @Prop()
  image: string;
  @Prop()
  conditions: [];
  @Prop()
  description: string;
  @Prop()
  discount_type: string;
  @Prop()
  discount: number;
  @Prop()
  free_shipping: string;
  @Prop()
  start_date: string;
  @Prop()
  end_date: string;
  @Prop()
  min_spend: number;
  @Prop()
  max_discount: number;
  @Prop()
  usage_limit: string;
  @Prop()
  usage_limit_customer: string;
  @Prop()
  products: [];
  @Prop()
  categories: [];
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);
