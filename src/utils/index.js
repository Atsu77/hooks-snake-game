export const initFields = (fieldsSize) => {
  const fields = [];
  for (let i = 0; i < fieldsSize; i++) {
    const cols = new Array(fieldsSize).fill("");
    fields.push(cols);
  }
  
  fields[17][17] = "snake";
  return fields;
};
