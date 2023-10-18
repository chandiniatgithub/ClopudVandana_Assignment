let string=prompt("Enter a string")
let reverseString= string => {
   let array = string.split(" ");
   let reversed = array.map(el => {
      return el.split('').reverse().join("")
   });
   return reversed.join(" ")
};
console.log(reverseString(string))