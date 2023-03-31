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
exports.hooks = exports.runPrepare = exports.prepare = exports.commitlint = exports.install = void 0;
const shell = __importStar(require("shelljs"));
const fs = __importStar(require("fs"));
const commit_msg_1 = require("../husky/commit-msg");
const post_commit_1 = require("../husky/post-commit");
const install = (path) => {
    return shell
        .cd(path)
        .exec("npm install husky @commitlint/cli @commitlint/config-conventional", {
        async: true,
    });
};
exports.install = install;
const commitlint = () => {
    return shell.exec("echo \"module.exports = { extends: ['@commitlint/config-conventional'] };\" > commitlint.config.js", { async: true });
};
exports.commitlint = commitlint;
const prepare = () => {
    return shell.exec('npx npe scripts._prepare "husky install && husky add .husky/commit-msg && husky add .husky/post-commit"', { async: true });
};
exports.prepare = prepare;
const runPrepare = () => {
    return shell.exec("npm run _prepare", { async: true });
};
exports.runPrepare = runPrepare;
const hooks = async (path) => {
    const p1 = new Promise((resolve, reject) => {
        fs.writeFile(`${path}/.husky/commit-msg`, commit_msg_1.commitMsg, (err) => {
            if (err)
                reject(err);
            resolve();
        });
    });
    const p2 = new Promise((resolve, reject) => {
        fs.writeFile(`${path}/.husky/post-commit`, post_commit_1.postCommit, (err) => {
            if (err)
                reject(err);
            resolve();
        });
    });
    await Promise.all([p1, p2]);
    return shell.mv(`${path}/.husky/post-commit`, `${path}/.husky/_post-commit`);
};
exports.hooks = hooks;
