export declare const entity = "import { ApiProperty } from '@nestjs/swagger';\nimport { AbstractEntity } from '@core/database/entity/abstract.entity';\n\nimport {\n  Entity,\n  PrimaryGeneratedColumn,\n  CreateDateColumn,\n  UpdateDateColumn,\n} from 'typeorm';\n\n@Entity()\nexport class [entity] extends AbstractEntity  {\n}\n\nexport enum [entity]OrderBy {\n  id = 'id',\n  createdAt = 'createdAt',\n  updatedAt = 'updatedAt',\n}\n\nexport enum [entity]Relations {\n}\n";
