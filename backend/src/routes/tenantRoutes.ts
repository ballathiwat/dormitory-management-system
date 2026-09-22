import express from 'express';
import { TenantController } from '../controllers/tenantController';
import type { Router } from 'express';

const router = express.Router() as Router;
const tenantController = new TenantController();

router.post('/', (req, res) => tenantController.create(req, res));
router.get('/', (req, res) => tenantController.getAll(req, res));
router.get('/:id', (req, res) => tenantController.getById(req, res));
router.put('/:id', (req, res) => tenantController.update(req, res));
router.delete('/:id', (req, res) => tenantController.delete(req, res));

export default router;
