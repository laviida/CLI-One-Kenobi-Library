"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectArchitecture = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.projectArchitecture = `📂 ${chalk_1.default.bold.whiteBright("root")}
├── 📜 ${chalk_1.default.bold.whiteBright("README.md")}
├── 📜 ${chalk_1.default.bold.whiteBright("commitlint.config.js")}
├── 📜 ${chalk_1.default.bold.whiteBright("nest-cli.json")}
├── 📜 ${chalk_1.default.bold.whiteBright("package-lock.json")}
├── 📜 ${chalk_1.default.bold.whiteBright("package.json")}
├── 📂 ${chalk_1.default.bold.whiteBright("src")}
│   ├── 📂 ${chalk_1.default.bold.whiteBright("app")}
│   │   ├── 🌐 ${chalk_1.default.bold.greenBright("api")}
│   │   ├── 🚀 ${chalk_1.default.bold.yellowBright("application")}
│   │   ├── 🏢 ${chalk_1.default.bold.blueBright("domain")}
│   │   ├── 🔧 ${chalk_1.default.bold.blueBright("core")}
│   │   ├── 📜 ${chalk_1.default.bold.whiteBright("app.module.ts")}
│   ├── 🎨 ${chalk_1.default.bold.whiteBright("assets")}
│   │   ├── 🌎 ${chalk_1.default.bold.whiteBright("favicon.ico")}
│   │   ├── 🖼️ ${chalk_1.default.bold.whiteBright("favicon.jpg")}
│   │   └── 📜 ${chalk_1.default.bold.whiteBright("swagger.css.ts")}
│   ├── 📂 ${chalk_1.default.bold.whiteBright("environments")}
│   │   ├── 📝 ${chalk_1.default.bold.whiteBright("dto")}
│   │   └── 📜 ${chalk_1.default.bold.whiteBright("environment.ts")}
│   └── 📜 ${chalk_1.default.bold.whiteBright("main.ts")}
├── 📂 ${chalk_1.default.bold.whiteBright("test")}
│   ├── 📜 ${chalk_1.default.bold.whiteBright("app.e2e-spec.ts")}
│   └── 📜 ${chalk_1.default.bold.whiteBright("jest-e2e.json")}
├── 📜 ${chalk_1.default.bold.whiteBright("tsconfig.build.json")}
└── 📜 ${chalk_1.default.bold.whiteBright("tsconfig.json")}`;
