import { Request, Response } from 'express';
import { RoomService } from '../services/roomService';
import { CreateRoomDTO, UpdateRoomDTO } from '../types';

const roomService = new RoomService();

export class RoomController {
  async create(req: Request, res: Response) {
    try {
      const data: CreateRoomDTO = req.body;
      const room = await roomService.create(data);
      res.status(201).json(room);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const rooms = await roomService.findAll();
      res.json(rooms);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const room = await roomService.findById(id);
      if (!room) {
        res.status(404).json({ error: 'Room not found' });
        return;
      }
      res.json(room);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const data: UpdateRoomDTO = req.body;
      const room = await roomService.update(id, data);
      res.json(room);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await roomService.delete(id);
      res.json({ message: 'Room deleted' });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
