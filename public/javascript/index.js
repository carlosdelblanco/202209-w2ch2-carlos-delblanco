import strictEquals from "./strictEquals.js";

console.log("1 is equal to 1: " + strictEquals("1", 1));
console.log("Nan is equal to Nan: " + strictEquals(NaN, NaN));
console.log("0 is equal to -0: " + strictEquals(0, -0));
console.log("-0 is equals to 0: " + strictEquals(-0, 0));
console.log("1 is equals to '1': " + strictEquals(1, "1"));
console.log("true is equals to false: " + strictEquals(true, false));
console.log("false is equals to false: " + strictEquals(false, false));
console.log("'Water' is equals to 'Oil: " + strictEquals("Water", "oil"));
