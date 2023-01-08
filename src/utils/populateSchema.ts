import {
  getRandomImage,
  getRandomName,
  getRandomNumber,
  getRandomString,
} from "./typesMock";

export default function populateSchema(
  fields: { key: string; type: string }[],
  size: number
) {
  const fieldsWithValues: any[] = [];

  for (let i = 0; i < size; i++) {
    const value = {};

    fields.forEach((field) => {
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

  return fieldsWithValues;
}
