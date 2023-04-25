"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = exports.mkdir = exports.runResourceCommand = void 0;
const ora_1 = __importDefault(require("ora"));
const commands_1 = require("./commands");
const project_architecture_1 = require("../../templates/resource/project-architecture");
const fs = __importStar(require("fs"));
const path_1 = require("path");
const constants_1 = require("../../templates/resource/constants");
const entity_1 = require("../../templates/resource/entity");
const dtos_1 = require("../../templates/resource/dtos");
const controller_1 = require("../../templates/resource/controller");
const application_1 = require("../../templates/resource/application");
const domain_1 = require("../../templates/resource/domain");
const spinner = (0, ora_1.default)();
const runResourceCommand = (path, resource) => {
    spinner.start("Comprobando arquitectura...");
    (0, commands_1.isProjectStructureValid)(path).then((valid) => {
        if (!valid)
            return spinner.fail(`Arquitectura del proyecto no válida\nLa arquitectura del proyecto debe ser:\n${project_architecture_1.projectArchitecture}`);
        spinner.succeed();
        spinner.start("Creando recursos...");
        const plural = resource.match(/s$/) ? resource + "es" : resource + "s";
        const singular = plural.match(/es$/)
            ? plural.slice(0, -2)
            : plural.slice(0, -1);
        const entityName = singular.charAt(0).toUpperCase() + singular.slice(1);
        const srcPath = `${path}/src/app`;
        const folders = [
            (0, path_1.join)(srcPath, "api", plural),
            (0, path_1.join)(srcPath, "api", plural, "constants"),
            (0, path_1.join)(srcPath, "api", plural, "dto"),
            (0, path_1.join)(srcPath, "api", plural, "entities"),
            (0, path_1.join)(srcPath, "application", plural),
            (0, path_1.join)(srcPath, "domain", plural),
        ];
        // Constants File
        const constantsData = constants_1.constants
            .replace(/\[entity\]/g, entityName)
            .replace(/\[filename\]/g, plural);
        const constantsPathData = {
            path: (0, path_1.join)(srcPath, "api", plural, "constants", `${plural}.constants.ts`),
            data: constantsData,
        };
        // Entity File
        const entityData = entity_1.entity.replace(/\[entity\]/g, entityName);
        const entityPathData = {
            path: (0, path_1.join)(srcPath, "api", plural, "entities", `${plural}.entity.ts`),
            data: entityData,
        };
        // Create Dto File
        const createDtoData = dtos_1.createDto.replace(/\[entity\]/g, entityName);
        const createDtoPathData = {
            path: (0, path_1.join)(srcPath, "api", plural, "dto", `create-${plural}.dto.ts`),
            data: createDtoData,
        };
        // Update Dto File
        const updateDtoData = dtos_1.updateDto.replace(/\[entity\]/g, entityName);
        const updateDtoPathData = {
            path: (0, path_1.join)(srcPath, "api", plural, "dto", `update-${plural}.dto.ts`),
            data: updateDtoData,
        };
        // Pagination Dto File
        const paginationDtoData = dtos_1.paginationDto
            .replace(/\[entity\]/g, entityName)
            .replace(/\[filename\]/g, plural);
        const paginationDtoPathData = {
            path: (0, path_1.join)(srcPath, "api", plural, "dto", `${plural}-pagination-options.dto.ts`),
            data: paginationDtoData,
        };
        // Controller File
        const controllerDtoData = controller_1.controller
            .replace(/\[entity\]/g, entityName)
            .replace(/\[filename\]/g, plural);
        const controllerDtoPathData = {
            path: (0, path_1.join)(srcPath, "api", plural, `${plural}.controller.ts`),
            data: controllerDtoData,
        };
        // Application File
        const applicationData = application_1.application
            .replace(/\[entity\]/g, entityName)
            .replace(/\[filename\]/g, plural);
        const applicationPathData = {
            path: (0, path_1.join)(srcPath, "application", plural, `${plural}.service.ts`),
            data: applicationData,
        };
        // Domain File
        const domainData = domain_1.domain
            .replace(/\[entity\]/g, entityName)
            .replace(/\[filename\]/g, plural)
            .replace(/\[alias\]/g, entityName.toLowerCase());
        const domainPathData = {
            path: (0, path_1.join)(srcPath, "domain", plural, `${plural}.domain.ts`),
            data: domainData,
        };
        (0, exports.mkdir)(folders).then(() => {
            (0, exports.write)([
                constantsPathData,
                entityPathData,
                createDtoPathData,
                updateDtoPathData,
                paginationDtoPathData,
                controllerDtoPathData,
                applicationPathData,
                domainPathData,
            ]).then(() => {
                spinner.succeed();
                console.log("Recursos creados correctamente!");
            });
        });
    });
};
exports.runResourceCommand = runResourceCommand;
const mkdir = async (paths) => {
    return Promise.all(paths.map((p) => {
        return new Promise((resolve, reject) => {
            fs.mkdir(p, { recursive: true }, (err) => {
                if (err)
                    reject(err);
                resolve();
            });
        });
    }));
};
exports.mkdir = mkdir;
const write = async (files) => {
    return Promise.all(files.map((f) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(f.path, f.data, (err) => {
                if (err)
                    reject(err);
                resolve();
            });
        });
    }));
};
exports.write = write;
