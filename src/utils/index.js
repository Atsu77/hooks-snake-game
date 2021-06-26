export const initFields = (fieldSize) => {
  const field =[]
  for (let i = 0; i < fieldSize; i++) {
    const cols = new Array(fieldSize).fill('')
    field.push(cols)
  }
  return field
}