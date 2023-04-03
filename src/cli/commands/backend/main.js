"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBackendCommand = void 0;
const ora_1 = __importDefault(require("ora"));
const commands_1 = require("./commands");
const spinner = (0, ora_1.default)();
const runBackendCommand = (path, resource) => {
    spinner.start("Comprobando arquitectura...");
    (0, commands_1.isProjectStructureValid)(path).then((valid) => {
        console.log(resource);
        console.log(valid);
        spinner.succeed();
    });
};
exports.runBackendCommand = runBackendCommand;
