import { PATHS } from '../swagger/paths/index.js';
import { SCHEMAS } from '../swagger/schemas/index.js';
import { TAGS } from '../swagger/tags.js';


export const SWAGGER_CONFIG = {
  openapi: '3.0.3',
  info: {
    title: 'Swagger pixelrest',
    description: 'REST API Documentation',
    version: '0.9.0'
  },
  tags: TAGS,
  paths: PATHS,
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    },
    schemas: SCHEMAS
  }
};
