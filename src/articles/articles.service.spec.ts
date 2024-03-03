import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { getModelToken } from '@nestjs/mongoose';

const mockArticle = {
  title: 'Cloning animals is ethical.',
  content: 'This is a sample article.',
  description: 'An article about cloning animals.',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: getModelToken('Article'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockArticle),
            constructor: jest.fn().mockResolvedValue(mockArticle),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
        EventEmitter2,
      ],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
