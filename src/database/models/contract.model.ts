import { Schema, Types, model } from 'mongoose';
import { DATABASES } from '../../constants';
import mongooseAutopopulate from 'mongoose-autopopulate';
import IContract from '../../interfaces/contract.interface';

const ContractSchema = new Schema<IContract>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.USER,
      unique: true,
      autopopulate: true,
      required: true,
    },
    amount_to_earn: {
      type: Number,
      required: true,
      default: 0,
    },
    hourly_interval: {
      type: Number,
      required: true,
      default: 30,
    },
    status: {
      type: String,
      enum: ['active', 'terminated', 'suspended', 'pending', 'other'],
      default: 'active',
    },
    deleted: {
      type: Schema.Types.Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

ContractSchema.plugin(mongooseAutopopulate);

const ContractModel = model<IContract>(DATABASES.CONTRACT, ContractSchema);

export default ContractModel;
