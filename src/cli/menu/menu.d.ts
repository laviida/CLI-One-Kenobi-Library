import Choice from "inquirer/lib/objects/choice";
export declare const ChoicesValues: {
    CREATE_PROJECT: Choice<import("inquirer").Answers>;
    CREATE_CRUD: Choice<import("inquirer").Answers>;
    EXIT: Choice<import("inquirer").Answers>;
};
export declare function menuQuestion(): Promise<void>;
