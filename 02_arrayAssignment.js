// class Array{
//     var inputArr=[1,2,2,4,5,4,7,8,7,3,6];
//     var removeDuplicate=Array.from (new Set(inputArr));
//     console.log(removeDuplicate);
// }
// class SubArray extends Array{
// }
//  var removeElemet=new Array();
//  console.log(removeElemet);
//  var result=new SubArray();
// console.log(result);class ExampleClass {
var ArrayHelper = /** @class */ (function () {
    function ArrayHelper(arr) {
        this.arr = arr;
    }
    ArrayHelper.prototype.removeDuplicates = function () {
        return Array.from(new Set(this.arr));
    };
    return ArrayHelper;
}());
var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log("Before remove duplicat Element");
console.log(inputArr);
var arrayHelper = new ArrayHelper(inputArr);
console.log("After remove Duplicat Element");
console.log(arrayHelper.removeDuplicates()); // Output: [1, 2, 4, 5, 7, 8, 3, 6]
