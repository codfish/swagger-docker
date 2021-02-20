# swagger-docker

Docker image for visually rendering documentation for an API defined with the OpenAPI (Swagger)
Specification. Simply mount over the `/app/swagger.yaml` file with your OpenAPI spec and you'll have
a Swagger UI to view & interact with in seconds.

Reason for building this image is because the
[native swagger-ui image](https://hub.docker.com/r/swaggerapi/swagger-ui/) doesn't support YAML, and
I personally prefer writing OpenAPI documentation in YAML.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Usage](#usage)
  - [With `dotdocker`](#with-dotdocker)
- [Reference](#reference)
- [Todo](#todo)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

> NOTE: Only YAML is supported _currently_.

Simply mount over `/app/swagger.yaml` with your local api spec. Example `docker-compose.yml` file:

```yaml
version: '3'

services:
  docs:
    image: codfish/swagger
    command: npm run dev
    ports:
      - '10010:10010'
    volumes:
      - ./my-api-spec.yaml:/app/swagger.yaml:delegated
```

This will make your swagger ui docs available at `http://localhost:10010`.

### With `dotdocker`

If you're interested in getting a fancy \*.docker url and not worrying about port collisions across
projects check out [dotdocker](https://github.com/aj-may/dotdocker). Instead of having to expose a
port and view the docs at `localhost:10010` for example, you can do this instead:

```yaml
version: '3'

services:
  docs:
    image: codfish/swagger
    command: npm run dev
    volumes:
      - ./my-api-spec.yaml:/app/swagger.yaml:delegated
    environment:
      VIRTUAL_HOST: docs.my-api.docker
```

1. `brew install aj-may/dotdocker/dotdocker`
2. `sudo dotdocker start`
3. Add `VIRTUAL_HOST` environment variable to any docker service.

That's it! You can visit the docs at `http://docs.my-api.docker/`.

## Reference

- **OpenAPI Specification:** <https://github.com/OAI/OpenAPI-Specification>

## Todo

- [ ] Support multiple file types
- [ ] Add `docker` command example to readme
- [ ] Add support for swagger-ui options
