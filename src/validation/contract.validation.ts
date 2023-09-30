import z from 'zod';
import { Types } from 'mongoose';

class Validation {
  // Validation schema for creating a new contract
  create = {
    body: z.object({
      user: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid User ObjectId format in user',
      }),
      amount_to_earn: z.number().min(0),
      hourly_interval: z.number().min(1),
      status: z.enum(['active', 'terminated', 'suspended', 'pending', 'other']),
      deleted: z.boolean().optional(),
    }),
  };

  // Validation schema for updating a contract
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid Contract ObjectId format in id',
      }),
    }),
    body: z.object({
      user: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid User ObjectId format in user',
        })
        .optional(),
      amount_to_earn: z.number().min(0).optional(),
      hourly_interval: z.number().min(1).optional(),
      status: z.enum(['active', 'terminated', 'suspended', 'pending', 'other']).optional(),
      deleted: z.boolean().optional(),
    }),
  };

  // Validation schema for finding contracts
  find = {
    query: z.object({
      _id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format in _id',
        })
        .optional(),
      user: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid User ObjectId format in user',
        })
        .optional(),
      amount_to_earn: z.string().min(0).optional(),
      hourly_interval: z.string().min(1).optional(),
      status: z.enum(['active', 'terminated', 'suspended', 'pending', 'other']).optional(),
      deleted: z.string().optional(),
    }),
  };

  // Validation schema for reading a contract by ID
  getById = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid Contract ObjectId format in id',
      }),
    }),
  };
}

export const contractValidation = new Validation();
