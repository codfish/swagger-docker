# swagger-docker

Docker image for swagger documentation. Simply mount your `swagger.yaml` file into the `/app` directory.

Example `docker-compose.yml` file:
```yml
version: '3'

services:
  docs:
    image: codfish/swagger
    command: npm run dev
    volumes:
      - ./swagger.yaml:/app/swagger.yaml:delegated
```

OpenAPI Specification: <https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#componentsObject>

## Todo

- Support multiple file types
