/// <reference types="node" />
import * as shell from "shelljs";
export declare const install: (path: string) => import("child_process").ChildProcess;
export declare const commitlint: () => import("child_process").ChildProcess;
export declare const prepare: () => import("child_process").ChildProcess;
export declare const runPrepare: () => import("child_process").ChildProcess;
export declare const hooks: (path: string) => Promise<shell.ShellString>;
