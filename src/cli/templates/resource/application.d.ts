export declare const application = "import { Create[entity]Dto } from '@controller/[filename]/dto/create-[filename].dto';\nimport { Update[entity]Dto } from '@controller/[filename]/dto/update-[filename].dto';\nimport { [entity] } from '@controller/[filename]/entities/[filename].entity';\nimport { EntityQuery } from '@core/database/dto/entity-query.dto';\nimport { [entity]DomainService } from '@domain/[filename]/[filename].domain';\nimport { Injectable } from '@nestjs/common';\nimport { map } from 'rxjs';\nimport { PageDto } from '@core/database/dto/page.dto';\nimport { PageMetaDto } from '@core/database/dto/pagination-meta.dto';\nimport { [entity]PageOptionsDto } from '@core/database/dto/pagination-options.dto';\n\n@Injectable()\nexport class [entity]Service {\n  constructor(private [filename]DomainService: [entity]DomainService) {}\n\n  create(createChassisDto: Create[entity]Dto) {\n    return this.[filename]DomainService.create(createChassisDto);\n  }\n\n  update(updateChassisDto: Update[entity]Dto) {\n    return this.[filename]DomainService.update(\n      updateChassisDto.id,\n      updateChassisDto,\n    );\n  }\n\n  remove(id: number) {\n    return this.[filename]DomainService.remove(id);\n  }\n\n  find(options?: EntityQuery<[entity]>) {\n    return this.[filename]DomainService.find(options ?? {});\n  }\n\n  paginate(pageOptionsDto: [entity]PageOptionsDto) {\n    return this.[filename]DomainService.paginate(pageOptionsDto).pipe(\n      map(({ itemCount, entities }) => {\n        const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });\n        return new PageDto(entities, pageMetaDto);\n      }),\n    );\n  }\n}\n";
