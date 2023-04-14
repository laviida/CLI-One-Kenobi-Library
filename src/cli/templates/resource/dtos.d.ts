export declare const createDto = "export class Create[entity]Dto {}";
export declare const updateDto = "import { ApiProperty } from '@nestjs/swagger';\nimport { IsNotEmpty, IsNumber } from 'class-validator';\n\nexport class Update[entity]Dto {\n  @ApiProperty()\n  @IsNumber()\n  @IsNotEmpty()\n  id: number;\n}\n";
