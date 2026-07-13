const path = require('path');

class PhotoController {
  preview = async (req, res) => {
    try {
      const imagePath = path.resolve(__dirname, '../../../assets/preview.jpg');
      res.sendFile(imagePath);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve photo preview' });
    }
  };
}

module.exports = { PhotoController };
