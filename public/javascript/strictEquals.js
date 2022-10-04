const numberA = NaN;
const numberB = NaN;

const strictEquals = (numberA, numberB) => {
  return Object.is(numberA, numberB);
};

strictEquals(numberA, numberB);

export default strictEquals;
