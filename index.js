const sharp = require('sharp');

const consume = './consume/';
const fs = require('fs');
const optDir = './opt'

// fs.rmdir(optDir, { recursive: true }, (err) => {
//   if (err) { throw err }
//   fs.mkdirSync(optDir)
// })

fs.readdir(consume, (err, files) => {
  console.log(files)
  files.forEach(file => {
    const name = file.replace(/\.[^/.]+$/, "")
    sharp(`./consume/${file}`)
    .webp({quality: 90, progressive: true})
    .resize(302)
    .toFile(`${optDir}/${name}.webp`, (err, info) => { console.log(err, info) })
  });
});
