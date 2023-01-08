import * as vscode from "vscode";
import validateInput from "./validator";

export async function getUserInputSchema() {
  const input = (await vscode.window.showInputBox({
    title:
      "Enter the comma-separated keys. You can optionally pass types using a colon character.",
    placeHolder: "id,name,age:number,city",
    validateInput,
  })) as string;

  return input.replace(/ /g, "");
}

export async function getUserInputSize() {
  const size = await vscode.window.showInputBox({
    title: "How much do you want to generate?",
    placeHolder: "5",
    value: "1",
  });

  if (!size || Number.isInteger(size) || Number.isNaN(Number.parseInt(size))) {
    vscode.window.showInformationMessage(
      "You dont insert a valid size, aborting..."
    );

    return false;
  }

  return size;
}
