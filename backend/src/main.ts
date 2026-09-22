import express from 'express';
import tenantRoutes from './routes/tenantRoutes';
import roomRoutes from './routes/roomRoutes';
import tenantshipRoutes from './routes/tenantshipRoutes';
import billingRoutes from './routes/billingRoutes';

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

// Routes
app.use('/api/v1/tenants', tenantRoutes);
app.use('/api/v1/rooms', roomRoutes);
app.use('/api/v1/tenantships', tenantshipRoutes);
app.use('/api/v1/billings', billingRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`📍 API: http://localhost:${PORT}/api/v1/health`);
});
