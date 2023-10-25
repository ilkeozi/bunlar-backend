import { applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export function DocumentCreate(name: string) {
  return applyDecorators(
    ApiOperation({
      summary: `Adds a new ${name}.`,
      description: `Adds a new ${name}.`,
    }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    ApiForbiddenResponse({ description: 'Forbidden' }),
    ApiNotFoundResponse({ description: `Not found` }),
  );
}
