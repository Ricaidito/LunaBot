const imageUrls = [
  "https://i.postimg.cc/bJnrtKKW/luna1.jpg",
  "https://i.postimg.cc/FK8119n0/luna2.jpg",
  "https://i.postimg.cc/wB776tF6/luna3.png",
];

module.exports = getLunaImage = () => {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
};
