"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuQuestion = exports.ChoicesValues = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
exports.ChoicesValues = {
    CREATE_PROJECT: {
        name: "Crear un nuevo proyecto NestJS",
        value: "create-project",
    },
    CREATE_CRUD: {
        name: "Crear un nuevo crud",
        value: "create-project",
    },
    EXIT: {
        name: "Salida",
        value: "exit",
    },
};
function menuQuestion() {
    const menuOptions = [
        {
            type: "list",
            name: "option",
            message: "Seleccione una opción:",
            choices: [
                exports.ChoicesValues.CREATE_PROJECT,
                exports.ChoicesValues.CREATE_CRUD,
                exports.ChoicesValues.EXIT,
            ],
        },
    ];
    return new Promise((res, rej) => {
        try {
            inquirer_1.default.prompt(menuOptions).then((answers) => {
                switch (answers.option) {
                    case "create-project":
                        console.log('You selected "Create a new NestJS project"');
                        res();
                        break;
                    case "exit":
                        console.log("Goodbye!");
                        res();
                        process.exit();
                        break;
                    default:
                        console.log("Invalid option");
                        res();
                        this();
                }
            });
        }
        catch (error) {
            rej();
        }
    });
}
exports.menuQuestion = menuQuestion;
