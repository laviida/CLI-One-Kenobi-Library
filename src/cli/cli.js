#!/usr/bin/env node
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
Object.defineProperty(exports, "__esModule", { value: true });
const shell = __importStar(require("shelljs"));
const commander_1 = require("commander");
const header_1 = require("./header/header");
const main_1 = require("./commands/husky/main");
const package_json_1 = require("../../package.json");
const main_2 = require("./commands/resource/main");
const main_3 = require("./commands/skeleton/main");
(0, header_1.showHeader)();
const kenobi = new commander_1.Command("kenobi");
shell.config.silent = true;
kenobi.description(package_json_1.description).version(package_json_1.version);
kenobi
    .command("husky")
    .description("Inicializar husky")
    .argument("<path>", "Define la ruta donde instalar husky")
    .action(main_1.runHuskyCommand);
kenobi
    .command("resource")
    .description("Crea un recurso para la ruta de back-end especificada")
    .argument("<path>", "Define la ruta raíz donde instalar el recurso")
    .argument("<resource>", "Define el nombre del recurso")
    .action(main_2.runResourceCommand);
kenobi
    .command("skeleton")
    .description("Un proyecto de esqueleto/boilerplate/iniciador para construir rápidamente API RESTful usando NestJS")
    .argument("<path>", "Define la ruta donde construir el esqueleto")
    .action(main_3.runSkeletonCommand);
kenobi.parse(process.argv);
