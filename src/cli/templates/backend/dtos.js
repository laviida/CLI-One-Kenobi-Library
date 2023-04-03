"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDto = exports.createDto = void 0;
exports.createDto = `export class Create[entity]Dto {}`;
exports.updateDto = `import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class Update[entity]Dto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
`;
