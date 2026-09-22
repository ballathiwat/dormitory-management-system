import Joi from 'joi';

export const tenantSchema = {
  create: Joi.object({
    firstName: Joi.string().required().max(100),
    lastName: Joi.string().required().max(100),
    phone: Joi.string().optional().max(20),
    email: Joi.string().email().optional(),
    idCard: Joi.string().required().max(20),
  }),
  update: Joi.object({
    firstName: Joi.string().optional().max(100),
    lastName: Joi.string().optional().max(100),
    phone: Joi.string().optional().max(20),
    email: Joi.string().email().optional(),
  }),
};

export const roomSchema = {
  create: Joi.object({
    roomNumber: Joi.string().required().max(50),
    floor: Joi.number().required().positive(),
    roomType: Joi.string().required().max(50),
    monthlyRent: Joi.number().required().positive(),
  }),
  update: Joi.object({
    roomNumber: Joi.string().optional().max(50),
    floor: Joi.number().optional().positive(),
    roomType: Joi.string().optional().max(50),
    monthlyRent: Joi.number().optional().positive(),
    status: Joi.string().optional(),
  }),
};

export const tenantshipSchema = {
  create: Joi.object({
    tenantId: Joi.number().required().positive(),
    roomId: Joi.number().required().positive(),
    checkInDate: Joi.date().required(),
    checkOutDate: Joi.date().optional(),
  }),
  update: Joi.object({
    checkInDate: Joi.date().optional(),
    checkOutDate: Joi.date().optional(),
    status: Joi.string().optional(),
  }),
};

export const billingSchema = {
  create: Joi.object({
    tenantshipId: Joi.number().required().positive(),
    monthYear: Joi.date().required(),
    rent: Joi.number().required().positive(),
    utilities: Joi.number().optional().default(0),
    otherCharges: Joi.number().optional().default(0),
    total: Joi.number().required().positive(),
  }),
  update: Joi.object({
    monthYear: Joi.date().optional(),
    rent: Joi.number().optional().positive(),
    utilities: Joi.number().optional(),
    otherCharges: Joi.number().optional(),
    total: Joi.number().optional().positive(),
    paid: Joi.boolean().optional(),
  }),
};
