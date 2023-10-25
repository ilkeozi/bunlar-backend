import { applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export function DocumentFindAll(name: string) {
  return applyDecorators(
    ApiOperation({
      summary: `Returns all ${name} .`,
      description: `Returns all ${name} .`,
    }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    ApiForbiddenResponse({ description: 'Forbidden' }),
    ApiNotFoundResponse({ description: `Not found` }),
  );
}
