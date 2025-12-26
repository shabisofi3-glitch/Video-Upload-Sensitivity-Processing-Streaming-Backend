exports.processVideo = (video, io) => {
  let progress = 0;
  const interval = setInterval(async () => {
    progress += 20;
    io.emit('progress', { videoId: video._id, progress });

    if(progress >= 100){
      clearInterval(interval);
      video.status = 'done';
      video.safe = true;
      await video.save();
    }
  }, 1000);
};