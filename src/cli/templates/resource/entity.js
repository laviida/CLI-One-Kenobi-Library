"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity = void 0;
exports.entity = `import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class [entity] {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number;

  @CreateDateColumn()
  @ApiProperty({ type: Date })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ type: Date })
  updatedAt: Date;
}
`;
