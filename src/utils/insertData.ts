import * as vscode from "vscode";

export default function enterText(text: string, replace?: boolean) {
  try {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("Open a file to insert the data!");
      return;
    }

    if (replace) {
      editor.edit((editBuilder) => {
        editBuilder.replace(editor.selection, text);
      });
      return;
    }

    editor.edit((editBuilder) => {
      editBuilder.insert(editor.selection.active, text);
    });
  } catch (error) {
    throw new Error("Error on insert data");
  }
}
