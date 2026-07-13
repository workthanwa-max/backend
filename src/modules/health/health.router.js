const { Router } = require('express');
const { HealthController } = require('./health.controller');

const healthRouter = Router();
const healthController = new HealthController();

healthRouter.get('/', healthController.checkHealth);

module.exports = { healthRouter };
