const countZeroes = require("./count-zeroes")

describe("#countZeroes", function(){
  it("counts the number of zeroes", function(){
    expect(countZeroes([1, 1, 1, 1, 0, 0])).toBe(2) // even numbered array
    expect(countZeroes([1, 1, 1, 0, 0])).toBe(2) // odd numbered array

    expect(countZeroes([1, 0, 0, 0, 0])).toBe(4) // odd array, leftmost 1
    expect(countZeroes([1, 0, 0, 0])).toBe(3) // even array, leftmost 1

    expect(countZeroes([1, 1, 0])).toBe(1) // odd array, rightmost 0
    expect(countZeroes([1, 1, 1, 0])).toBe(1) // even array, rightmost 0

    expect(countZeroes([0, 0, 0])).toBe(3) // odd array, all 0
    expect(countZeroes([0, 0, 0, 0])).toBe(4) // even array, all 0
    
    expect(countZeroes([1, 1, 1, 1])).toBe(0) // even array, all 1
    expect(countZeroes([1, 1, 1])).toBe(0) // odd array, all 1
  })
})
