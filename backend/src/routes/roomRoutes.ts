import express from 'express';
import { RoomController } from '../controllers/roomController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validateRequest } from '../middleware/validationMiddleware';
import { roomSchema } from '../validation/schemas';
import type { Router } from 'express';

const router = express.Router() as Router;
const roomController = new RoomController();

router.post('/', authMiddleware, validateRequest(roomSchema.create), (req, res) =>
  roomController.create(req, res)
);
router.get('/', (req, res) => roomController.getAll(req, res));
router.get('/:id', (req, res) => roomController.getById(req, res));
router.put('/:id', authMiddleware, validateRequest(roomSchema.update), (req, res) =>
  roomController.update(req, res)
);
router.delete('/:id', authMiddleware, (req, res) => roomController.delete(req, res));

export default router;
