const ggT = (a, b) => {
  if (b === 0) return a;
  return ggT(b, a % b);
};

const kgV = (a, b) => {
  return (a * b) / ggT(a, b);
};
