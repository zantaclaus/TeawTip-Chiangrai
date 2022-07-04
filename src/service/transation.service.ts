const variantUpToDown = {
  hidden: { y: -50 },
  visible: { y: 0, transition: { duration: 0.5 } },
};

const variantDownToUP = {
  hidden: { y: 50 },
  visible: { y: 0, transition: { duration: 0.5 } },
};

const variantRightToLeft = {
  hidden: { x: 50 },
  visible: { x: 0, transition: { duration: 0.5 } },
};

const variantLeftToRight = {
  hidden: { x: -50 },
  visible: { x: 0, transition: { duration: 0.5 } },
};

export const transition = {
  variantUpToDown,
  variantDownToUP,
  variantLeftToRight,
  variantRightToLeft,
};
