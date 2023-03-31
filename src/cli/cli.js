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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shell = __importStar(require("shelljs"));
const commander_1 = require("commander");
const header_1 = require("./header/header");
const ora_1 = __importDefault(require("ora"));
const commands_1 = require("./commands/commands");
(0, header_1.showHeader)();
const program = new commander_1.Command();
shell.config.silent = true;
const spinner = (0, ora_1.default)();
program
    .command("husky <path>")
    .description("Initialize husky")
    .action((path) => {
    spinner.start("Instalando dependencias...");
    (0, commands_1.install)(path).once("close", () => {
        spinner.succeed();
        spinner.start("Añadiendo configuración commitlint...");
        (0, commands_1.commitlint)().once("close", () => {
            spinner.succeed();
            spinner.start("Editando package.json...");
            (0, commands_1.prepare)().once("close", () => {
                spinner.succeed();
                spinner.start("Creando los hooks de husky...");
                (0, commands_1.runPrepare)().once("close", () => {
                    spinner.succeed();
                    (0, commands_1.hooks)(path).then(() => console.log("Hooks instalados correctamente!"));
                });
            });
        });
    });
});
program.parse(process.argv);
