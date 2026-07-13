const { Router } = require('express');
const { PhotoController } = require('./photo.controller');

const photoRouter = Router();
const photoController = new PhotoController();

photoRouter.get('/preview', photoController.preview);

module.exports = { photoRouter };
