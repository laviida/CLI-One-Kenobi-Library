"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runHuskyCommand = void 0;
const ora_1 = __importDefault(require("ora"));
const commands_1 = require("./commands");
const spinner = (0, ora_1.default)();
const runHuskyCommand = (path) => {
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
};
exports.runHuskyCommand = runHuskyCommand;
