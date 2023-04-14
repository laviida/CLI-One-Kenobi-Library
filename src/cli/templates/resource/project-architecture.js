"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectArchitecture = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.projectArchitecture = `📂 ${chalk_1.default.bold.whiteBright("root")}
└── 📂 ${chalk_1.default.bold.whiteBright("src")}
    └── 📂 ${chalk_1.default.bold.whiteBright("app")}
        ├── 📂 ${chalk_1.default.bold.greenBright("api")}
        ├── 📂 ${chalk_1.default.bold.yellowBright("application")}
        └── 📂 ${chalk_1.default.bold.blueBright("domain")}`;
