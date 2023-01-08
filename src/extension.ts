import * as vscode from "vscode";

import insertData from "./utils/insertData";
import userInputSchemaService from "./services/userInputSchema.service";
import userSelectionSchemaService from "./services/userSelectionSchema.service";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "vscode-data-mock-generator.generateData",
    async () => {
      const editor = vscode.window.activeTextEditor;
      const selectedText = editor?.document.getText(editor.selection);

      try {
        if (selectedText) {
          const generatedMockData = await userSelectionSchemaService(
            selectedText
          );
          insertData(generatedMockData, true);
          return;
        }

        const generatedMockData = await userInputSchemaService();
        insertData(generatedMockData);

        return;
      } catch (error) {
        //TODO: improve and teste the error handler here
        //@ts-ignore
        vscode.window.showErrorMessage(error);
      }
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
