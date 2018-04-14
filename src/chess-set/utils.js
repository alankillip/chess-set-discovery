const getRange = n => Array.from(Array(n).keys());

export const NUM_SQUARES = 8;

export const isOdd = n => n % 2 === 1;

export const getSquareIndexes = () => getRange(NUM_SQUARES * NUM_SQUARES);

export const getRowNum = index => Math.floor(index / NUM_SQUARES);

export const getColumnNum = index => index % NUM_SQUARES;
