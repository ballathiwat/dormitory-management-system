import express from 'express';
import authRoutes from './routes/authRoutes';
import tenantRoutes from './routes/tenantRoutes';
import roomRoutes from './routes/roomRoutes';
import tenantshipRoutes from './routes/tenantshipRoutes';
import billingRoutes from './routes/billingRoutes';
import { errorHandler } from './middleware/errorMiddleware';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Auth Routes
app.use('/api/v1/auth', authRoutes);

// API Routes
app.use('/api/v1/tenants', tenantRoutes);
app.use('/api/v1/rooms', roomRoutes);
app.use('/api/v1/tenantships', tenantshipRoutes);
app.use('/api/v1/billings', billingRoutes);

// Error Handler (must be last)
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`📍 Login: POST http://localhost:${PORT}/api/v1/auth/login`);
});
