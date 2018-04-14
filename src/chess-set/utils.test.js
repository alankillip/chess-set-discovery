import {getSquareIndexes} from "./utils";

it('returns an array of length 64', () => {
  const expected = 64;
  const actual = getSquareIndexes();
  expect(actual.length).toEqual(expected);
});