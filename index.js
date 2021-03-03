const sharp = require('sharp');

const consume = './consume/';
const fs = require('fs');
const optDir = './opt'

fs.rmdir(optDir, { recursive: true }, (err) => {
  if (err) { throw err }
  fs.mkdirSync(optDir)
})

fs.readdir(consume, (err, files) => {
  files.forEach(file => {
    const name = file.replace(/\.[^/.]+$/, "")
    sharp(`./consume/${file}`)
    .resize(302)
    .webp({quality: 90})
    .toFile(`${optDir}/${name}.webp`, (err, info) => { console.log(err, info) })
  });
});
