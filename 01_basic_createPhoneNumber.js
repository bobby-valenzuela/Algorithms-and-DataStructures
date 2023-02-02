// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.


const createPhoneNumber = num => `(${num[0]}${num[1]}${num[2]}) ${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}${num[8]}${num[9]}`;

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
