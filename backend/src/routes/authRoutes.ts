import express from 'express';
import { AuthController } from '../controllers/authController';
import type { Router } from 'express';

const router = express.Router() as Router;
const authController = new AuthController();

router.post('/login', (req, res) => authController.login(req, res));

export default router;
