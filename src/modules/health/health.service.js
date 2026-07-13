const prisma = require('../../database/prisma');

class HealthService {
  async getHealthStatus() {
    try {
      await prisma.user.count();
      return { status: 'ok', database: 'connected' };
    } catch (error) {
      console.error('Database health check failed:', error);
      return { status: 'error', database: 'disconnected' };
    }
  }
}

module.exports = { HealthService };
