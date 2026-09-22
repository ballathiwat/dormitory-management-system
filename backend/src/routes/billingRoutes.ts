import express from 'express';
import { BillingController } from '../controllers/billingController';
import type { Router } from 'express';

const router = express.Router() as Router;
const billingController = new BillingController();

router.post('/', (req, res) => billingController.create(req, res));
router.get('/', (req, res) => billingController.getAll(req, res));
router.get('/unpaid', (req, res) => billingController.getUnpaid(req, res));
router.get('/tenant/:tenantId', (req, res) => billingController.getByTenantId(req, res));
router.get('/:id', (req, res) => billingController.getById(req, res));
router.put('/:id', (req, res) => billingController.update(req, res));
router.patch('/:id/pay', (req, res) => billingController.markAsPaid(req, res));
router.delete('/:id', (req, res) => billingController.delete(req, res));

export default router;
