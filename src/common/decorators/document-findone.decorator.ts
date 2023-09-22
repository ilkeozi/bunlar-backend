import { applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export function DocumentFindOne(name: string) {
  return applyDecorators(
    ApiOperation({
      summary: `Returns ${name} with specified id parameter.`,
      description: `Returns ${name} with specified id parameter.`,
    }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    ApiForbiddenResponse({ description: 'Forbidden' }),
    ApiNotFoundResponse({ description: `Not found` }),
  );
}
