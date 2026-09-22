import express from 'express';
import { TenantController } from '../controllers/tenantController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validateRequest } from '../middleware/validationMiddleware';
import { tenantSchema } from '../validation/schemas';
import type { Router } from 'express';

const router = express.Router() as Router;
const tenantController = new TenantController();

router.post('/', authMiddleware, validateRequest(tenantSchema.create), (req, res) =>
  tenantController.create(req, res)
);
router.get('/', (req, res) => tenantController.getAll(req, res));
router.get('/:id', (req, res) => tenantController.getById(req, res));
router.put('/:id', authMiddleware, validateRequest(tenantSchema.update), (req, res) =>
  tenantController.update(req, res)
);
router.delete('/:id', authMiddleware, (req, res) => tenantController.delete(req, res));

export default router;
