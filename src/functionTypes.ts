function FunctionTypes() {
  function PrintResult(num: number): void {
    console.log(`Result: ${num}`)
  }

  let combineValues: (a: number) => void
  combineValues = PrintResult

  combineValues(8)

  // Function with callback type
  function addHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
  }

  addHandle(10, 20, (result) => {
    console.log(result)
  })

  const add = (a: number, b: number = 2) => a + b

  console.log(add(5))
}

export default FunctionTypes
