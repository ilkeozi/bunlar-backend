import { applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export function DocumentDelete(name: string) {
  return applyDecorators(
    ApiOperation({
      summary: `Deletes ${name} with specified id parameter.`,
      description: `Deletes ${name} with specified id parameter.`,
    }),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    ApiForbiddenResponse({ description: 'Forbidden' }),
    ApiNotFoundResponse({ description: `Not found` }),
  );
}
