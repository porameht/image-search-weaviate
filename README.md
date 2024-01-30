
Ref. Model Inference
https://weaviate.io/developers/weaviate/installation/docker-compose

```
curl -o docker-compose.yml "https://configuration.weaviate.io/v2/docker-compose/docker-compose.yml?generative_cohere=false&generative_openai=false&generative_palm=false&image_neural_model=pytorch-resnet50&media_type=image&modules=modules&ref2vec_centroid=false&reranker_cohere=false&runtime=docker-compose&weaviate_version=v1.20.5"
```
This command will download the docker-compose.yml file required to set up Weaviate with the specified configuration options.

Starting Weaviate
Once you've downloaded the Docker Compose configuration, you can start Weaviate using the following command:
```
docker-compose up -d
```

Ref. Model
https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/img2vec-neural

Config Schema and Select model
```
node schema.js
```
Convert image to vector command
```
node image2vec.js
```
Search by image command
```
node index.js
```
