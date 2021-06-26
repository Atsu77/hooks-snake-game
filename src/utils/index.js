export const getFoodPosition = (fieldSize, excludes) => {
  while (true) {
    const x = Math.floor(Math.random() * (fieldSize - 2)) + 1;
    const y = Math.floor(Math.random() * (fieldSize - 2)) + 1;
    const conflict = excludes.some((item) => item.x === x && item.y === y);
    if (!conflict) {
      return { x, y };
    }
  }
};

export const initFields = (fieldsSize, snake) => {
  const fields = [];
  for (let i = 0; i < fieldsSize; i++) {
    const cols = new Array(fieldsSize).fill("");
    fields.push(cols);
  }

  fields[snake.x][snake.y] = 'snake'

  const food = getFoodPosition(fieldsSize, [snake]);
  fields[food.x][food.y] = "food";

  return fields;
};
