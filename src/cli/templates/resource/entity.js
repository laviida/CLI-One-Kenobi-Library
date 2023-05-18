"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity = void 0;
exports.entity = `import { ApiProperty } from '@nestjs/swagger';
import { AbstractEntity } from '@core/database/entity/abstract.entity';

import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class [entity] extends AbstractEntity  {
}

export enum [entity]OrderBy {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum [entity]Relations {
}
`;
