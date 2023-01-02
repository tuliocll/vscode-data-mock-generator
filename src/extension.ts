import * as vscode from "vscode";
import {
  getRandomImage,
  getRandomName,
  getRandomNumber,
  getRandomString,
} from "./utils/typesMock";

import insertData from "./utils/insertData";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "vscode-data-mock-generator.generateData",
    async () => {
      const input = await vscode.window.showInputBox({
        title:
          "Enter the comma-separated keys. You can optionally pass types using a colon character.",
        placeHolder: "id,name,age:number,city",
      });

      if (!input) {
        vscode.window.showInformationMessage(
          "You dont insert any data, aborting..."
        );

        return;
      }

      const userSize = await vscode.window.showInputBox({
        title: "How much do you want to generate?",
        placeHolder: "5",
        value: "1",
      });

      if (
        !userSize ||
        Number.isInteger(userSize) ||
        Number.isNaN(Number.parseInt(userSize))
      ) {
        vscode.window.showInformationMessage(
          "You dont insert a valid size, aborting..."
        );

        return;
      }

      const size = Number.parseInt(userSize);
      const splitFields = input.split(",");

      const fieldsWithTypes = splitFields.map((field) => {
        if (field.includes(":")) {
          const cut = field.split(":");

          return {
            key: cut[0],
            type: cut[1],
          };
        }

        return {
          key: field,
          type: "string",
        };
      });

      const fieldsWithValues: any[] = [];

      for (let i = 0; i < size; i++) {
        const value = {};

        fieldsWithTypes.forEach((field) => {
          switch (field.type) {
            case "name":
              Object.assign(value, {
                [field.key]: getRandomName(),
              });
              break;

            case "number":
              Object.assign(value, {
                [field.key]: getRandomNumber(),
              });
              break;

            case "image":
              Object.assign(value, {
                [field.key]: getRandomImage(),
              });
              break;

            default:
              Object.assign(value, {
                [field.key]: getRandomString(),
              });
              break;
          }
        });
        fieldsWithValues.push(value);
      }

      insertData(JSON.stringify(fieldsWithValues));
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
