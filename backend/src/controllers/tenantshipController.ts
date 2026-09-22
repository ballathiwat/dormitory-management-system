import { Request, Response } from 'express';
import { TenantshipService } from '../services/tenantshipService';
import { CreateTenantshipDTO, UpdateTenantshipDTO } from '../types';

const tenantshipService = new TenantshipService();

export class TenantshipController {
  async create(req: Request, res: Response) {
    try {
      const data: CreateTenantshipDTO = req.body;
      const tenantship = await tenantshipService.create(data);
      res.status(201).json(tenantship);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const tenantships = await tenantshipService.findAll();
      res.json(tenantships);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const tenantship = await tenantshipService.findById(id);
      if (!tenantship) {
        res.status(404).json({ error: 'Tenantship not found' });
        return;
      }
      res.json(tenantship);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const data: UpdateTenantshipDTO = req.body;
      const tenantship = await tenantshipService.update(id, data);
      res.json(tenantship);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await tenantshipService.delete(id);
      res.json({ message: 'Tenantship deleted' });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getByTenantId(req: Request, res: Response) {
    try {
      const tenantId = parseInt(req.params.tenantId);
      const tenantships = await tenantshipService.findByTenantId(tenantId);
      res.json(tenantships);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getActiveByRoom(req: Request, res: Response) {
    try {
      const roomId = parseInt(req.params.roomId);
      const tenantship = await tenantshipService.findActiveByRoom(roomId);
      res.json(tenantship);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async endTenantship(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const tenantship = await tenantshipService.endTenantship(id);
      res.json(tenantship);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
