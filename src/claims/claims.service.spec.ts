import { Test, TestingModule } from '@nestjs/testing';
import { ClaimsService } from './claims.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { getModelToken } from '@nestjs/mongoose';

describe('ClaimsService', () => {
  let service: ClaimsService;

  const mockClaim = {
    title: 'Cloning animals is ethical.',
    content: 'This is a sample article.',
    description: 'An article about cloning animals.',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClaimsService,
        {
          provide: getModelToken('Claim'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockClaim),
            constructor: jest.fn().mockResolvedValue(mockClaim),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
        EventEmitter2,
      ],
    }).compile();

    service = module.get<ClaimsService>(ClaimsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
