const strictEquals = (a, b) => {
  if (Object.is(a, 1) && Object.is(b, 1)) {
    return true;
  }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return false;
  }

  if (Object.is(a, 0) && Object.is(b, -0)) {
    return true;
  }

  if (Object.is(a, -0) && Object.is(b, 0)) {
    return true;
  } else {
    return Object.is(a, b);
  }
};

export default strictEquals;
