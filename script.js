// 1. Do the below programs in anonymous function & IIFE  
// 2. Do the below programs in arrow function

//1.a.Print odd numbers in an array
// * anonymous function
var a = function (arr){
  var result = []; 
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));

//*IIFE 
(function (arr1,num){
  var res = [];
  for(var j=0;j<arr1.length;j++){
    if(arr1[j]%2!==0){
        res.push(arr1[j]);
    }
  }
  console.log(res) 
})([11,12,13,14,15,16,17,18,19,20])

//2.a.Arrow Function
var odds =(arr2)=>{
  var rst = [];
  for(var k=0;k<arr2.length;k++){
    if(arr2[k]%2!==0){
        rst.push(arr2[k]);
    }
  }
  return rst;
}
console.log(odds([31,32,33,34,35,36,37,38,39,40]));

//1.b  Convert all the strings to title caps in a string array
//  * anonymous function
   
    function titleCase(str) {
    var a = [];
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    a.push(str[i]);
    }
    return a;
    }
    console.log(titleCase("guvi geek"));

//*  IIFE
      (function titleCase(str) {
          var b = [];
          str = str.toLowerCase().split(' ');
          for (var i = 0; i < str.length; i++) {
              str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
              b.push(str[i]);              
          }console.log(b);
     }) ("guvi geek");

// 2.b * ARROW FUNCTION
    var titleCase= (str)=>{
        var a = [];
        str = str.toLowerCase().split(' ');
        for (var i = 0; i <str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            a.push(str[i]);
        }
        return a;
        };console.log(titleCase("guvi geek"));

//1.c  Sum of all numbers in an array
// *ANONYMOUS FUNCTION
var num= [10,25,35]
function sum (x,y,z) {
var a =[];
  var plus= (x+y+z);
  a.push(plus);
  console.log(a);
  return a;
    } sum(10, 25, 35);

//  *IIFE
(function sum (x,y,z) {
 var a =[];
  var plus= (x+y+z);
  a.push(plus);
  console.log(a);
    })(10, 25, 35);

//2.c *ARROW FUNCTION
var sum = (x,y,z)=> {
var a =[];
  sum= (x+y+z);
  a.push(sum);
  return a;
    }; console.log(sum(10, 25, 35));

    // 1.d Return all the prime numbers in an array
    //  * ANONYMOUS FUNCTION
                  var array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
                  function isPrime(num) {
                    for (let i= 2; num >i; i++) {
                      if (num % i == 0) {
                        return false;
                      }
                    }
                    return num > 1;
                  }
    
                  console.log(array.filter(isPrime));
    // *IIFE
    var array = [2, 3, 4, 5, 6, 7, 8, 9, 10];  
                  (function isPrime(num) {                    
                    for (let i= 2; num >i; i++) {
                      if (num % i == 0) {
                        return false;
                      }
                    }
                    return num > 1;
                  
                      });(console.log(array.filter(isPrime)));
                   
    //2.c. ARROW FUNCTION
                var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
                numArray = numArray.filter((number) => {
                  for (var i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i === 0) return false;
                  }
                  return true;
                }); console.log(numArray);
      
//1.e Return all the palindromes in the array
    // *ANONYMOUS FUNCTION
       var a = function(arr){
        var resu= [];
        for (var i=0; i<arr.length;i++){
        var data=arr [i].split("").reverse().join("");
        if  (data===arr[i]){
         resu.push(arr[i]);
        }
        }
        return resu;
        }
       console.log (a(["mom","dad","data","wow"]));   
            
 //   *IIFE
     function p (arr){
      var resu= [];
      for (var i=0; i<arr.length;i++){
       var data=arr [i].split("").reverse().join("");
       if  (data===arr[i]){
       resu.push(arr[i]);
      }
      }
      return resu;
      }
     console.log (a(["mom","dad","data","wow"]));
                     
// 2.e.*ARROW FUNCTION
    var a = (arr)=>{
      var resu= [];
      for (var i=0; i<arr.length;i++){
     var data=arr [i].split("").reverse().join("");
     if  (data===arr[i]){
     resu.push(arr[i]);
     }
      }
      return resu;
      }
      console.log (a(["mom","dad","data","wow"]));

//1.f. Return median of two sorted arrays of the same size
// * ANONYMOUS FUNCTION
const arr1= [1,3,5,7];
const arr2=[2,4,6,8];
var m = function(arr1,arr2){
  let arr= [...arr1, ...arr2]
  arr.sort((a,b)=>a-b)
  let n= arr.length
if(n%2===0){
  return((arr[n/2]+arr[n/2-1])/2)
} else{
  return[arr.Math.floor(n/2)];
}
}
console.log(m(arr1,arr2))

//IIFE

const arr3= [1,3,5,7];
const arr4=[2,4,6,8];
(function m(arr3,arr4){
  let arr= [...arr3, ...arr4]
  arr.sort((a,b)=>a-b)
  let n= arr.length
if(n%2===0){
  return((arr[n/2]+arr[n/2-1])/2)
} else{
  return[arr.Math.floor(n/2)];
}
});console.log(m(arr3,arr4))

//  1.g  Remove duplicates from an array
//  * ANONYMOUS FUNCTION
var A = [1,1,2,2,3,4,5,6,6]
function dup(array){
let dup = [...new Set(array)];
console.log(dup);
} dup([1,1,2,2,3,4,5,6,6]);

//  * IIFE
(function dup(array){
let dup = [...new Set(array)];
console.log(dup);
}) ([1,1,2,2,3,4,5,6,6]);

//1.h Rotate an array by k times
//ANONYMOUS FUNCTION

var ab= function(arr,k){
  for(var i=0; i<k; i++){
    arr.push(arr[i])
  }for(var i=0; i<k;i++) {
    arr.shift()
 } return(arr)
} 
console.log(ab([1,2,3,4,5],3))

//IIFE
const arr=[1,2,3,4,5];
const k=3;
(function (arr,k){
  for(var i=0; i<k; i++){
    arr.push(arr[i])
  }for(var i=0; i<k;i++) {
    arr.shift()
 }console.log(arr);
}) (arr,k)

