//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reverse(dogs) {
    dogs.reverse()
    console.log(dogs)
}

reverse(['a', 'b', 'c'])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function squaresGreaterThanCubes(a, b) {
    let aSum = a.reduce((acc, curr) => acc += curr** 2, 0)
    let bSum = b.reduce((acc, curr) => acc += curr**3, 0)
    return aSum > bSum
}

console.log(squaresGreaterThanCubes([2, 3, 5], [1, 2, 3, 4]))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function multipleOfIndex(arr) {
    return arr.filter((c, i) => c % i === 0)
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumAllNumbers(arr) {
    return arr.reduce((acc, curr) => acc + Number(curr), Number(arr[0]))
}

console.log(sumAllNumbers(['1', '2', 3]))