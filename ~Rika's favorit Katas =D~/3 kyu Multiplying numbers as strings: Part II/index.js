/*
Description:

This is the Part II of Multiplying numbers as strings.
TODO

Multiply two numbers! Simple!
Rules

    The arguments are passed as strings.
    The numbers will be very large
    The arguments can be negative, in decimals, and might have leading and trailing zeros. e.g. "-01.300"
    Answer should be returned as string
    The returned answer should not have leading or trailing zeroes (when applicable) e.g. "0123" and "1.100" are wrong, they should be "123" and "1.1"
    Zero should not be signed and "-0.0" should be simply returned as "0". 

*/

//My solution done with sylwolveryn <3

var ZERO = BigInt(0);
var TEN = BigInt(10);
var isInteger = (numberAsString) => numberAsString.indexOf(".") < 0;
var bothAreIntegers = (aa, bb) => isInteger(aa) && isInteger(bb);

var extractNumberToParts = (numberAsString) => {
  //case integer
  if (isInteger(numberAsString)) {
    return {
      integerOnPower: BigInt(numberAsString),
      amountOfDecimals: ZERO
    };
  }
  //case float

  /*
   * In case of positive numbers
   * integerOnPower = (integer * (10 ** amountOfDecimals)) + (+decimals);
   *
   * In case of positive numbers
   * integerOnPower = (integer * (10 ** amountOfDecimals)) + (-decimals);
   */

  const integer = BigInt(`${numberAsString}`.split(".")[0]);
  const decimals = BigInt(`${numberAsString}`.split(".")[1]);
  const amountOfDecimals = BigInt(
    `${numberAsString}`.split(".")[1].length || 0
  );
  const addOrDistractDecimals = (base) =>
    integer < 0 ? base - decimals : base + decimals;
  const integerOnPower = addOrDistractDecimals(
    integer * TEN ** amountOfDecimals
  );

  return {
    integerOnPower,
    amountOfDecimals
  };
};

var multiply = (aa, bb) => {
  if (bothAreIntegers(aa, bb)) return `${BigInt(aa) * BigInt(bb)}`;

  const {
    integerOnPower: intA,
    amountOfDecimals: decAmountA
  } = extractNumberToParts(aa);
  const {
    integerOnPower: intB,
    amountOfDecimals: decAmountB
  } = extractNumberToParts(bb);
  const resultPart01 = intA * intB;
  const resultPart02 = TEN ** (decAmountA + decAmountB);
  const resultOnlyInt = resultPart01 / resultPart02;
  const amountOfDecimals = `${resultPart02}`.length - 1;
  const amountOfLeadingZeros =
    amountOfDecimals > `${resultPart01}`.length
      ? amountOfDecimals - `${resultPart01}`.length
      : 0;
  let resultOnlyFloat =
    "0".repeat(amountOfLeadingZeros) +
    `${resultPart01}`.substr(-amountOfDecimals);
  for (let i = resultOnlyFloat.length; i >= 0; i--) {
    if (resultOnlyFloat[i - 1] === "0") {
      resultOnlyFloat = resultOnlyFloat.substr(0, resultOnlyFloat.length - 1);
      continue;
    }
    break;
  }

  return !resultOnlyFloat
    ? `${resultOnlyInt}`
    : `${resultOnlyInt}.${resultOnlyFloat}`;
};

//done with sylwolveryn
