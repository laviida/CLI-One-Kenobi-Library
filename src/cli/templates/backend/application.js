"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application = void 0;
exports.application = `import { Create[entity]Dto } from '@controller/[filename]/dto/create-[filename].dto';
import { Update[entity]Dto } from '@controller/[filename]/dto/update-[filename].dto';
import { [entity] } from '@controller/[filename]/entities/[filename].entity';
import { EntityQuery } from '@core/database/dto/entity-query.dto';
import { [entity]DomainService } from '@domain/[filename]/[filename].domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class [entity]Service {
  constructor(private [filename]DomainService: [entity]DomainService) {}

  create(createChassisDto: Create[entity]Dto) {
    return this.[filename]DomainService.create(createChassisDto);
  }

  update(updateChassisDto: Update[entity]Dto) {
    return this.[filename]DomainService.update(
      updateChassisDto.id,
      updateChassisDto,
    );
  }

  remove(id: number) {
    return this.[filename]DomainService.remove(id);
  }

  find(options?: EntityQuery<[entity]>) {
    return this.[filename]DomainService.find(options ?? {});
  }
}
`;