import { applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export function DocumentUpdate(name: string) {
  return applyDecorators(
    ApiOperation({
      summary: `Updates ${name} with specified id parameter.`,
      description: `Updates ${name} with specified id parameter.`,
    }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    ApiForbiddenResponse({ description: 'Forbidden' }),
    ApiNotFoundResponse({ description: `Not found` }),
  );
}
