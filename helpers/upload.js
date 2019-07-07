module.exports = {
  getPublicPath(file) {
    const imagePath = 'http://localhost:3000/uploads/';
    const publicPath = imagePath + file.filename;
    return publicPath;
  }
}