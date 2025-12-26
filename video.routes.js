const router = require('express').Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const ctrl = require('../controllers/video.controller');

module.exports = (io) => {
  const upload = multer({ dest:'src/uploads/' });

  router.post('/upload', auth(['editor','admin']), upload.single('video'),
    (req,res) => ctrl.uploadVideo(req,res,io));

  router.get('/', auth(), ctrl.getVideos);
  router.get('/stream/:id', auth(), ctrl.streamVideo);

  return router;
};