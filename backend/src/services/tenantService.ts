import { PrismaClient } from '@prisma/client';
import { CreateTenantDTO, UpdateTenantDTO } from '../types';

const prisma = new PrismaClient();

export class TenantService {
  async create(data: CreateTenantDTO) {
    return await prisma.tenant.create({
      data,
    });
  }

  async findAll() {
    return await prisma.tenant.findMany({
      include: {
        tenantships: true,
      },
    });
  }

  async findById(id: number) {
    return await prisma.tenant.findUnique({
      where: { id },
      include: {
        tenantships: {
          include: {
            room: true,
            billings: true,
          },
        },
      },
    });
  }

  async update(id: number, data: UpdateTenantDTO) {
    return await prisma.tenant.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.tenant.delete({
      where: { id },
    });
  }
}
