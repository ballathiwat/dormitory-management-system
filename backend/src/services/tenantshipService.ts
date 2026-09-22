import { PrismaClient } from '@prisma/client';
import { CreateTenantshipDTO, UpdateTenantshipDTO } from '../types';

const prisma = new PrismaClient();

export class TenantshipService {
  async create(data: CreateTenantshipDTO) {
    // Update room status to occupied
    await prisma.room.update({
      where: { id: data.roomId },
      data: { status: 'occupied' },
    });

    return await prisma.tenantship.create({
      data: {
        tenantId: data.tenantId,
        roomId: data.roomId,
        checkInDate: new Date(data.checkInDate),
        checkOutDate: data.checkOutDate ? new Date(data.checkOutDate) : null,
      },
      include: {
        tenant: true,
        room: true,
        billings: true,
      },
    });
  }

  async findAll() {
    return await prisma.tenantship.findMany({
      include: {
        tenant: true,
        room: true,
        billings: true,
      },
    });
  }

  async findById(id: number) {
    return await prisma.tenantship.findUnique({
      where: { id },
      include: {
        tenant: true,
        room: true,
        billings: true,
      },
    });
  }

  async update(id: number, data: UpdateTenantshipDTO) {
    return await prisma.tenantship.update({
      where: { id },
      data: {
        checkInDate: data.checkInDate ? new Date(data.checkInDate) : undefined,
        checkOutDate: data.checkOutDate ? new Date(data.checkOutDate) : undefined,
        status: data.status,
      },
      include: {
        tenant: true,
        room: true,
        billings: true,
      },
    });
  }

  async delete(id: number) {
    const tenantship = await prisma.tenantship.findUnique({
      where: { id },
    });

    if (tenantship) {
      // Update room status to available
      await prisma.room.update({
        where: { id: tenantship.roomId },
        data: { status: 'available' },
      });
    }

    return await prisma.tenantship.delete({
      where: { id },
    });
  }

  async findByTenantId(tenantId: number) {
    return await prisma.tenantship.findMany({
      where: { tenantId },
      include: {
        room: true,
        billings: true,
      },
    });
  }

  async findActiveByRoom(roomId: number) {
    return await prisma.tenantship.findFirst({
      where: { roomId, status: 'active' },
      include: {
        tenant: true,
        billings: true,
      },
    });
  }

  async endTenantship(id: number) {
    const tenantship = await prisma.tenantship.findUnique({
      where: { id },
    });

    if (tenantship) {
      await prisma.room.update({
        where: { id: tenantship.roomId },
        data: { status: 'available' },
      });
    }

    return await prisma.tenantship.update({
      where: { id },
      data: {
        status: 'ended',
        checkOutDate: new Date(),
      },
      include: {
        tenant: true,
        room: true,
        billings: true,
      },
    });
  }
}
