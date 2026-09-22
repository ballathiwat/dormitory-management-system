import express from 'express';
import { BillingController } from '../controllers/billingController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validateRequest } from '../middleware/validationMiddleware';
import { billingSchema } from '../validation/schemas';
import type { Router } from 'express';

const router = express.Router() as Router;
const billingController = new BillingController();

router.post('/', authMiddleware, validateRequest(billingSchema.create), (req, res) =>
  billingController.create(req, res)
);
router.get('/', (req, res) => billingController.getAll(req, res));
router.get('/unpaid', (req, res) => billingController.getUnpaid(req, res));
router.get('/tenant/:tenantId', (req, res) => billingController.getByTenantId(req, res));
router.get('/:id', (req, res) => billingController.getById(req, res));
router.put('/:id', authMiddleware, validateRequest(billingSchema.update), (req, res) =>
  billingController.update(req, res)
);
router.patch('/:id/pay', authMiddleware, (req, res) => billingController.markAsPaid(req, res));
router.delete('/:id', authMiddleware, (req, res) => billingController.delete(req, res));

export default router;
