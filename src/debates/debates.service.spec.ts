import { Test, TestingModule } from '@nestjs/testing';
import { DebatesService } from './debates.service';
import { getModelToken } from '@nestjs/mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';

describe('DebatesService', () => {
  let service: DebatesService;

  const mockDebate = {
    title: 'Cloning animals is ethical.',
    content: 'This is a sample article.',
    description: 'An article about cloning animals.',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DebatesService,
        {
          provide: getModelToken('Debate'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockDebate),
            constructor: jest.fn().mockResolvedValue(mockDebate),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
        EventEmitter2,
      ],
    }).compile();

    service = module.get<DebatesService>(DebatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
