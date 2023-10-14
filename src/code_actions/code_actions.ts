import { window, CodeAction, CodeActionProvider, CodeActionKind } from "vscode";

export class CustomFlutterCodeActionProvider implements CodeActionProvider {
    public provideCodeActions(): CodeAction[] {
        const editor = window.activeTextEditor;
        if (!editor) return [];
        return [
            {
                "command": "extension.wrap-scaffold",
                "title": "Wrap With Scaffold"
            }
        ,    {
                "command": "extension.wrap-expanded",
                "title": "Wrap With Expanded"
            },
        {
                "command": "extension.wrap-futurebuilder",
                "title": "Wrap With FutureBuilder"
            },
        ].map((c) => {
            let action = new CodeAction(c.title, CodeActionKind.Refactor);
            action.command = {
                command: c.command,
                title: c.title,
            };
            return action;
        });
    }
}
