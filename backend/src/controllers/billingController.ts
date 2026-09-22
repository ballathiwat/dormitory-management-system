import { Request, Response } from 'express';
import { BillingService } from '../services/billingService';
import { CreateBillingDTO, UpdateBillingDTO } from '../types';

const billingService = new BillingService();

export class BillingController {
  async create(req: Request, res: Response) {
    try {
      const data: CreateBillingDTO = req.body;
      const billing = await billingService.create(data);
      res.status(201).json(billing);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const { paid, tenantshipId } = req.query;
      const filters: any = {};
      
      if (paid !== undefined) filters.paid = paid === 'true';
      if (tenantshipId) filters.tenantshipId = parseInt(tenantshipId as string);

      const billings = await billingService.findAll(filters);
      res.json(billings);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const billing = await billingService.findById(id);
      if (!billing) {
        res.status(404).json({ error: 'Billing not found' });
        return;
      }
      res.json(billing);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const data: UpdateBillingDTO = req.body;
      const billing = await billingService.update(id, data);
      res.json(billing);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await billingService.delete(id);
      res.json({ message: 'Billing deleted' });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getByTenantId(req: Request, res: Response) {
    try {
      const tenantId = parseInt(req.params.tenantId);
      const billings = await billingService.findByTenantId(tenantId);
      res.json(billings);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getUnpaid(req: Request, res: Response) {
    try {
      const billings = await billingService.findUnpaid();
      res.json(billings);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async markAsPaid(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const billing = await billingService.markAsPaid(id);
      res.json(billing);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
