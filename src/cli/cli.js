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
const main_2 = require("./commands/backend/main");
(0, header_1.showHeader)();
const kenobi = new commander_1.Command("kenobi");
shell.config.silent = true;
kenobi.description(package_json_1.description).version(package_json_1.version);
kenobi
    .command("husky")
    .description("Initialize husky")
    .argument("<path>", "Defines the path where to install husky")
    .action(main_1.runHuskyCommand);
kenobi
    .command("backend")
    .description("Creates a resource for specified backend path")
    .argument("<path>", "Defines the path where to install the resource")
    .argument("<resource>", "Defines the name of the resource")
    .action(main_2.runBackendCommand);
kenobi.parse(process.argv);
