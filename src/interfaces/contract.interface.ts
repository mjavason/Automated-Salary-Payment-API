import { Types } from 'mongoose';

export default interface IContract {
  user: string | Types.ObjectId;
  amount_to_earn: number;
  hourly_interval: number;
  status: string;
  deleted: boolean;
}
