/*
  Literal types
*/

type combinable = number | string

function LiteralTypes() {
  function combine(
    value1: combinable,
    value2: combinable,
    resultConversion: string,
  ): combinable {
    let result: combinable

    if (typeof value1 === 'number' && typeof value2 === 'number') {
      result = value1 + value2
    } else {
      result = value1.toString() + value2.toString()
    }
    // by passing a result conversion we make sure the returned results is converted accordingly called as literal conversion
    if (resultConversion === 'as-number') {
      return +result
    } else if (resultConversion === 'as-string') {
      return result.toString()
    }
  }

  console.log(combine(30, 26, 'as-number'))
  console.log(combine('Adam', 'John', 'as-string'))
}

export default LiteralTypes
