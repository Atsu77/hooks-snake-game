export const initFields = (fieldsSize, initialPosition) => {
  const fields = [];
  for (let i = 0; i < fieldsSize; i++) {
    const cols = new Array(fieldsSize).fill("");
    fields.push(cols);
  }
  
  fields[initialPosition.y][initialPosition.x] = 'snake'
  return fields;
};
