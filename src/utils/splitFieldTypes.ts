export default function splitFieldType(fields: string[]) {
  return fields.map((field) => {
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
}
