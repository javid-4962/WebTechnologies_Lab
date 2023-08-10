// 1. Sorting items of an array
let numbers = [1, 5, 2, 6, 7, -9, 3, 9, 0, 2, 1];
numbers = numbers.sort()
console.log(numbers)

// 2. find Leap years in given range
function isLeapYear(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0));
}
function leapYears(startYear, endYear) {
    let leapYearslist = [];
    for (let year = startYear; year <= endYear; year++) {
        if (isLeapYear(year)) {
            leapYearslist.push(year);
        }
    }
    return leapYearslist;
}
console.log(leapYears(2000, 2040))
console.log(leapYears(2000, 2040).length)

// 3. dublicate values in a javascript array
function finddub(arr) {
    const occur = {}
    const dublicates = []
    for (let element of arr) {
        if (occur[element]) {
            if (occur[element] === 1) {
                dublicates.push(element);
            }
            occur[element]++;
        }
        else {
            occur[element] = 1;
        }
    }
    return dublicates;
}
let arr = [1, 2, 2, 3, 2, 3, 4, 5, 1, 6, 7, 8, 4, 9, 2, 0]
console.log(finddub(arr).sort())

// 4. function to return a string that has letters in alphabetical order
function alphabetical(str) {
    str = str.split('').sort().join('')
    return str;
}
// let str = prompt('Enter a string')
let str = "this is text"
console.log(alphabetical(str))

// 5. function to count number of vowels in the string
function vowel_count(str) {
    str = str.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char))
            count++;
    }
    return count;
}
// 6. gcd of two numbers
function findGCD(a, b) {
    a = Math.abs(a)
    b = Math.abs(b)
    while (b !== 0) {
        let rem = a % b
        a = b
        b = rem
    }
    return a;
}
console.log(findGCD(81, 18))

// 7. js program to compute avg marks and determine grade
function avgmarksandgrade(marks) {
    let total = marks.reduce((acc, curr) => acc + curr, 0);
    let avg = total / marks.length;
    console.log('avg = ' + avg)
    if (avg >= 90)
        return "O";
    else if (avg >= 80)
        return "A";
    else if (avg >= 70)
        return "B";
    else if (avg >= 60)
        return "C";
    else if (avg >= 50)
        return "D";
    else
        return "F";
}
let marks = [55, 90, 80, 75, 95]
console.log(avgmarksandgrade(marks))

// 8. conditional statement to find the largest of five numbers. Display in alert box
const num1 = 53;
const num2 = 45;
const num3 = 27;
const num4 = 27;
const num5 = 10;
let large = num1;
if (num2 > large)
    large = num2
if (num3 > large)
    large = num3
if (num4 > large)
    large = num4
if (num5 > large)
    large = num5
// alert('The largest number is : ' + large)
console.log('The largest number is : ' + large)

// 9. loop that iterates from 0 to 15 and returns the numbers are odd or even
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even.`)
    }
    else {
        console.log(`${i} is odd.`)
    }
}

// 10. function to get current date
function currentDate() {
    let cudate = new Date().toDateString()
    return cudate
}
console.log(currentDate())

// 11. last day of a month
function getlastday(year, month) {
    const nextmonth = new Date(year, month, 1);
    const lastday = new Date(nextmonth - 1)
    return lastday.getDate();
}
console.log(getlastday(2024, 1))
console.log(getlastday(2024, 2))
console.log(getlastday(2024, 3))
console.log(getlastday(2024, 4))
console.log(getlastday(2024, 5))
console.log(getlastday(2024, 6))
console.log(getlastday(2024, 7))
console.log(getlastday(2024, 8))
console.log(getlastday(2024, 9))
console.log(getlastday(2024, 10))
console.log(getlastday(2024, 11))
console.log(getlastday(2024, 12))

// 12. minutes to hours and minutes
function convertMinHours(minutes){
    if(minutes>=0){
        const hours = Math.floor(minutes/60);
        const remaining = minutes % 60;
        return {
            hours:hours,
            minutes:remaining
        };
    }
    else{
        return "Enter valid minutes";
    }
}
const totalMin = 185;
console.log(convertMinHours(totalMin));

// 13. First character of a string is upper of not 
function isFirstCharUppercase(str){
    const first= str.charAt(0);
    return first === first.toUpperCase();
}
console.log(isFirstCharUppercase("hello all"))

// 14. Alpha numeric or not 
function isAlphanum(value){
    const pattern=/^[0-9a-zA-Z]+$/;
    return pattern.test(value);
}
console.log(isAlphanum("Hello123"));

// 15. reverse the order of characters in the string
function reverseStringLoop(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str.charAt(i);
    }
    return reversedString;
  }
  const inputString = "Hello, World!";
  const reversedString = reverseStringLoop(inputString);
  console.log(reversedString);
  