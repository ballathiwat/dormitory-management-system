import { Request, Response } from 'express';
import { TenantService } from '../services/tenantService';
import { CreateTenantDTO, UpdateTenantDTO } from '../types';

const tenantService = new TenantService();

export class TenantController {
  async create(req: Request, res: Response) {
    try {
      const data: CreateTenantDTO = req.body;
      const tenant = await tenantService.create(data);
      res.status(201).json(tenant);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const tenants = await tenantService.findAll();
      res.json(tenants);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const tenant = await tenantService.findById(id);
      if (!tenant) {
        res.status(404).json({ error: 'Tenant not found' });
        return;
      }
      res.json(tenant);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const data: UpdateTenantDTO = req.body;
      const tenant = await tenantService.update(id, data);
      res.json(tenant);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await tenantService.delete(id);
      res.json({ message: 'Tenant deleted' });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
