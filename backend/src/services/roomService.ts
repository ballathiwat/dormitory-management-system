import { PrismaClient } from '@prisma/client';
import { CreateRoomDTO, UpdateRoomDTO } from '../types';

const prisma = new PrismaClient();

export class RoomService {
  async create(data: CreateRoomDTO) {
    return await prisma.room.create({
      data,
    });
  }

  async findAll() {
    return await prisma.room.findMany({
      include: {
        tenantships: true,
      },
    });
  }

  async findById(id: number) {
    return await prisma.room.findUnique({
      where: { id },
      include: {
        tenantships: {
          include: {
            tenant: true,
            billings: true,
          },
        },
      },
    });
  }

  async update(id: number, data: UpdateRoomDTO) {
    return await prisma.room.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.room.delete({
      where: { id },
    });
  }
}
