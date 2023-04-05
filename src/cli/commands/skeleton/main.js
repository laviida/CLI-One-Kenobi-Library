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
exports.runSkeletonCommand = void 0;
const ora_1 = __importDefault(require("ora"));
const fs = __importStar(require("fs"));
const unzipper_1 = require("unzipper");
const project_architecture_1 = require("../../templates/skeleton/project-architecture");
const chalk_1 = __importDefault(require("chalk"));
const path_1 = require("path");
const spinner = (0, ora_1.default)();
const runSkeletonCommand = (path) => {
    spinner.start("Copiando arquitectura...");
    console.log("__dirname", __dirname);
    fs.copyFile((0, path_1.join)(__dirname, "..", "..", "templates/skeleton/architecture/architecture.zip"), `${path}/architecture.zip`, (err) => {
        if (err)
            return spinner.fail(`Error inesperado:\n${err.message}`);
        spinner.succeed();
        spinner.start("Generando recursos...");
        const readStream = fs.createReadStream(`${path}/architecture.zip`);
        readStream
            .pipe((0, unzipper_1.Extract)({ path }))
            .on("close", () => {
            spinner.succeed();
            spinner.start("Limpiando...");
            fs.rm(`${path}/architecture.zip`, () => {
                spinner.succeed();
                console.log(`Arquitectura generada en ${chalk_1.default.bold.whiteBright(path)}\nLa arquitectura generada tendrá la siguiente estructura:\n${project_architecture_1.projectArchitecture}`);
            });
        })
            .on("error", (err) => {
            spinner.fail(`Error inesperado:\n${err.message}`);
        });
    });
};
exports.runSkeletonCommand = runSkeletonCommand;
