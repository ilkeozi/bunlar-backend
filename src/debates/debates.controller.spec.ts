import { Test, TestingModule } from '@nestjs/testing';
import { DebatesController } from './debates.controller';
import { DebatesService } from './debates.service';
import { CacheModule } from '@nestjs/cache-manager';
import { getModelToken } from '@nestjs/mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';

describe('DebatesController', () => {
  let controller: DebatesController;
  let service: DebatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DebatesController],
      providers: [
        DebatesService,
        {
          provide: getModelToken('Debate'),
          useValue: {
            new: jest.fn().mockResolvedValue({}),
            constructor: jest.fn().mockResolvedValue({}),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
        EventEmitter2,
      ],
      imports: [CacheModule.register()],
    }).compile();

    controller = module.get<DebatesController>(DebatesController);
    service = module.get<DebatesService>(DebatesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
