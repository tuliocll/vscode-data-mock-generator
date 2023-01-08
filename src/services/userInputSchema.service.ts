import { getUserInputSchema, getUserInputSize } from "../utils/getUserInput";
import splitFieldType from "../utils/splitFieldTypes";
import populateSchema from "../utils/populateSchema";

export default async function userInputSchemaService() {
  try {
    const input = await getUserInputSchema();
    const userSize = await getUserInputSize();

    const size = Number.parseInt(userSize || "1");
    const splitFields = input.split(",");

    const fieldsWithTypes = splitFieldType(splitFields);

    const fieldsWithValues = populateSchema(fieldsWithTypes, size);

    return JSON.stringify(fieldsWithValues);
  } catch (error) {
    throw new Error("Error generating input mock data");
  }
}
