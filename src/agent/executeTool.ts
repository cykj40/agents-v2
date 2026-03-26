import { tools } from "./tools/index.ts";

export type ToolName = keyof typeof tools;

export async function executeTool(
	name: string,
	args: Record<string, unknown>,
): Promise<string> {
	const tool = tools[name as ToolName];

	if (!tool) {
		return `Unknown tool: ${name}`;
	}

	const execute = tool.execute;
	if (!execute) {
		// Provider tools (like webSearch) are executed by OpenAI, not us
		return `Provider tool ${name} - executed by model provider`;
	}

	const result = await (
		execute as unknown as (
			args: Record<string, unknown>,
			opts: { toolCallId: string; messages: unknown[] },
		) => Promise<unknown>
	)(args, {
		toolCallId: "",
		messages: [],
	});

	return String(result);
}
