import { getUserInputSize } from "../utils/getUserInput";
import splitFieldType from "../utils/splitFieldTypes";
import populateSchema from "../utils/populateSchema";

export default async function userSelectionSchemaService(value: string) {
  try {
    const userSize = await getUserInputSize();
    const size = Number.parseInt(userSize || "1");

    const sanitazed = value
      ?.replace(/ /g, "")
      .replace(/\n/g, "")
      .replace(/{/g, "")
      .replace(/}/g, "")
      .replace(/"/g, "");

    const splitFields = sanitazed?.split(",");

    const valuesWithTypes = splitFieldType(splitFields);

    const fieldsWithValues = populateSchema(valuesWithTypes, size);

    return JSON.stringify(fieldsWithValues);
  } catch (error) {
    throw new Error("Error on generate schema object.");
  }
}
