import { PrismaClient } from '@prisma/client';
import { CreateBillingDTO, UpdateBillingDTO } from '../types';

const prisma = new PrismaClient();

export class BillingService {
  async create(data: CreateBillingDTO) {
    return await prisma.billing.create({
      data: {
        ...data,
        monthYear: new Date(data.monthYear),
      },
      include: {
        tenantship: {
          include: {
            tenant: true,
            room: true,
          },
        },
      },
    });
  }

  async findAll(filters?: { paid?: boolean; tenantshipId?: number }) {
    return await prisma.billing.findMany({
      where: filters,
      include: {
        tenantship: {
          include: {
            tenant: true,
            room: true,
          },
        },
      },
      orderBy: { monthYear: 'desc' },
    });
  }

  async findById(id: number) {
    return await prisma.billing.findUnique({
      where: { id },
      include: {
        tenantship: {
          include: {
            tenant: true,
            room: true,
          },
        },
      },
    });
  }

  async update(id: number, data: UpdateBillingDTO) {
    return await prisma.billing.update({
      where: { id },
      data: {
        ...data,
        monthYear: data.monthYear ? new Date(data.monthYear) : undefined,
        paidAt: data.paid ? new Date() : undefined,
      },
      include: {
        tenantship: {
          include: {
            tenant: true,
            room: true,
          },
        },
      },
    });
  }

  async delete(id: number) {
    return await prisma.billing.delete({
      where: { id },
    });
  }

  async findByTenantId(tenantId: number) {
    return await prisma.billing.findMany({
      where: {
        tenantship: {
          tenantId,
        },
      },
      include: {
        tenantship: {
          include: {
            tenant: true,
            room: true,
          },
        },
      },
      orderBy: { monthYear: 'desc' },
    });
  }

  async findUnpaid() {
    return await prisma.billing.findMany({
      where: { paid: false },
      include: {
        tenantship: {
          include: {
            tenant: true,
            room: true,
          },
        },
      },
      orderBy: { monthYear: 'desc' },
    });
  }

  async markAsPaid(id: number) {
    return await prisma.billing.update({
      where: { id },
      data: {
        paid: true,
        paidAt: new Date(),
      },
      include: {
        tenantship: {
          include: {
            tenant: true,
            room: true,
          },
        },
      },
    });
  }
}
