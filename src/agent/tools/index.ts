import { executeCode } from "./codeExecution.ts";
import { deleteFile, listFiles, readFile, writeFile } from "./file.ts";
import { runCommand } from "./shell.ts";
import { webSearch } from "./webSearch.ts";

// All tools combined for the agent
export const tools = {
	readFile,
	writeFile,
	listFiles,
	deleteFile,
	runCommand,
	executeCode,
	webSearch,
};

// Export individual tools for selective use in evals
export { executeCode } from "./codeExecution.ts";
export { deleteFile, listFiles, readFile, writeFile } from "./file.ts";
export { runCommand } from "./shell.ts";
export { webSearch } from "./webSearch.ts";

// Tool sets for evals
export const fileTools = {
	readFile,
	writeFile,
	listFiles,
	deleteFile,
};

export const shellTools = {
	runCommand,
};
