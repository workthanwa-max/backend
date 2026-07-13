const { HealthService } = require('./health.service');

class HealthController {
  constructor() {
    this.healthService = new HealthService();
  }

  checkHealth = async (req, res) => {
    try {
      const status = await this.healthService.getHealthStatus();
      res.status(200).json(status);
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  };
}

module.exports = { HealthController };
