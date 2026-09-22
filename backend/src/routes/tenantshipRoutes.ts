import express from 'express';
import { TenantshipController } from '../controllers/tenantshipController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validateRequest } from '../middleware/validationMiddleware';
import { tenantshipSchema } from '../validation/schemas';
import type { Router } from 'express';

const router = express.Router() as Router;
const tenantshipController = new TenantshipController();

router.post('/', authMiddleware, validateRequest(tenantshipSchema.create), (req, res) =>
  tenantshipController.create(req, res)
);
router.get('/', (req, res) => tenantshipController.getAll(req, res));
router.get('/tenant/:tenantId', (req, res) => tenantshipController.getByTenantId(req, res));
router.get('/room/:roomId/active', (req, res) => tenantshipController.getActiveByRoom(req, res));
router.get('/:id', (req, res) => tenantshipController.getById(req, res));
router.put('/:id', authMiddleware, validateRequest(tenantshipSchema.update), (req, res) =>
  tenantshipController.update(req, res)
);
router.patch('/:id/end', authMiddleware, (req, res) =>
  tenantshipController.endTenantship(req, res)
);
router.delete('/:id', authMiddleware, (req, res) => tenantshipController.delete(req, res));

export default router;
