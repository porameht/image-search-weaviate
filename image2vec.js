
import weaviate from 'weaviate-ts-client';
import * as fs from 'fs';
import path from 'path';

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

// image to vector by one image
// const img = fs.readFileSync('./img');
// const b64 = Buffer.from(img).toString('base64');
// await client.data.creator()
//     .withClassName('Meme')
//     .withProperties({
//     image: b64,
//     text: 'matrix meme'
// }).do();

// image to vector
const imageFolder = './img';
fs.readdir(imageFolder, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(imageFolder, file);

    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif')) {
      const img = fs.readFileSync(filePath);
      const b64 = Buffer.from(img).toString('base64');

      client.data.creator()
        .withClassName('Meme')
        .withProperties({
          image: b64,
          text: 'matrix meme',
        })
        .do()
        .then(() => {
          console.log(`Created data object for ${file}`);
        })
        .catch((error) => {
          console.error(`Error creating data object for ${file}: ${error}`);
        });
    } else {
      console.log(`${file} is not an image file and will be skipped.`);
    }
  });
});
