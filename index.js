import weaviate from 'weaviate-ts-client';
import * as fs from 'fs';

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

const query = Buffer.from(fs.readFileSync('./query.png')).toString('base64');

const resImage = await client.graphql.get()
    .withClassName('Meme')
    .withFields(['image'])
    .withNearImage({ image: query })
    .withLimit(1)
    .do();

const result = resImage.data.Get.Meme[0].image;
// console.log(result)

fs.writeFileSync('./result.jpg', result, 'base64');