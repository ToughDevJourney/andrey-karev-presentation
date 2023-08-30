export const checkIsElementsCollide = (xPos1: number, xPos2: number, distance: number) => {
  return xPos1 - distance < xPos2 && xPos2 < xPos1 + distance;
};
