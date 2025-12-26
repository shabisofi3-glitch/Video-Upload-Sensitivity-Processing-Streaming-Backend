const Video = require('../models/Video');
const { processVideo } = require('../services/video.service');

exports.uploadVideo = async (req,res,io) => {
  const video = await Video.create({
    filename: req.file.filename,
    owner: req.user.id
  });
  processVideo(video, io);
  res.json(video);
};

exports.getVideos = async (req,res) => {
  const videos = await Video.find({owner:req.user.id});
  res.json(videos);
};

exports.streamVideo = async (req,res) => {
  const video = await Video.findById(req.params.id);
  res.sendFile(`src/uploads/${video.filename}`, {root:'.'});
};