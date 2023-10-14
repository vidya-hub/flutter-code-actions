

import * as vscode from 'vscode';
import { CustomFlutterCodeActionProvider } from './code_actions/code_actions';
import { wrapWithExpanded, wrapWithFutureBuilder, wrapWithScaffold } from './commands/wrap_with';



export function activate(context: vscode.ExtensionContext) {

	const DART_MODE = { language: "dart", scheme: "file" };

	context.subscriptions.push(

		vscode.commands.registerCommand(
			"extension.wrap-scaffold",
			wrapWithScaffold,
		),
		vscode.commands.registerCommand(
			"extension.wrap-expanded",
			wrapWithExpanded,
		),
		vscode.commands.registerCommand(
			"extension.wrap-futurebuilder",
			wrapWithFutureBuilder,
		),

		vscode.languages.registerCodeActionsProvider(
			DART_MODE,
			new CustomFlutterCodeActionProvider()
		)
	);
}


export function deactivate() { }
