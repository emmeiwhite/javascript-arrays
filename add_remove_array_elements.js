// Array Methods : push, pop, shift,unshift
// Example 1 . push() and pop(...x). Adding and removing elements to and from the end of an array resp.
console.log(`********************* push() and pop(...x) methods in colors array **************************`)

const colors = ['red','orange','blue'];

console.log(colors);

colors.push('green'); 

console.log(colors); 

console.log(colors.pop()); // colors.pop() removes the last element in an array and also returns that value

console.log(colors);

// All the stuff popping and pushing ,shifting etc happens on the actual array mutably :)


//  Example 2. shift() and unshift(). Adding and removing elements to and from the beginning of an array resp.
console.log(`********************* shift() and unshift(...x) methods in friends array **************************`)
const friends = ['Brad Traversy','Maxmillian','Shoaib Bhimani','TechSith Tutorial'];

console.log(friends);

console.log(friends.shift())

console.log(friends);
friends.unshift('Stephen Grider');
console.log(friends)

//  Example 3. splice() 

console.log('*********************** splice() method in numbers array ***************************');
const numbers = [21,11,43,72,87];
// Let;s use delete keyword to delete element on index 3 and try to know its behaviour

delete numbers[3];
console.log(numbers);// element 72 is deleted and replaced with 'empty' ! but expected a reduced array with numbers.length = 4 which previously was 5

// We will make use of splice method to remove elements from an array ! splice(from index,remove how many, add from that index how many)
// arr.splice(index[, deleteCount, elem1, ..., elemN])

numbers.splice(3,1); // starting from index 3 remove 1 element , i-e our 'empty' element which we got previously
console.log(numbers);

const _nums = [1,2,5,6,7];
_nums.splice(2,0,3,4); // Starting from index 2, delete 0 elements,add 3,4 
console.log(_nums)

// Negative Indexes also allowed, by using -indexes we begin from the end [Kind of second last element]

const prime_numbers = [2,3,5,13];
prime_numbers.splice(-1,0,7,9);
console.log(prime_numbers);

// Example 4. slice() : syntax-> arr.slice(start, end). It returns a new array where it copies all items start index "start" to "end" (not including "end").  

let name='ratherImran';
console.log(name.slice(0,6));// returns rather


let nameTwo='ratherImran'; // if we want to start from n we use -1, so last letter has -1
console.log(nameTwo.slice(-11,-1));// returns ratherImra

// Note: Let's check slice() behaviour on arrays. One use of it is to get the full copied array. Immutability in action.Kind of clone

const books = ['AlFawaid','Lives of Men','Devels Deception'];
const clonedBooks = books.slice();
console.log(clonedBooks);

// Till ES6 slice() was used to clone the array. From ES6 we use spread operator. [...books] and that's it! let me show an example
console.log([...clonedBooks]); // A new array was returned which was the clone of the clonedBooks array!




