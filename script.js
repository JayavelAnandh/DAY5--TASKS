// 1.st question ----a;
var odd = function (arr){   //anonymous function
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);
        }
    }
    console.log(result);
}
odd([1,2,3,4,5,6,7,8,9]);
// (5) [1, 3, 5, 7, 9] output on console

(function (arr){    //IIFE 
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);
        }
    }
    console.log(result);
})([1,2,3,4,5,6,7,8,9]);
// (5) [1, 3, 5, 7, 9] output in console
//----------------------------------------------------------------
//1st.b---

var caps = function (str) { // anonymous
    var sentence = str.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
}
caps("kids love bts");

(function (str) {// ------------------IIFE
    var sentence = str.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
})("legends love tentacion")

//  Kids Love Bts
// Legends Love Tentacion -- output
//---------------------------------------------------------------------
//1st question . c

var sum = function(arr){//--------------------ANONYMOUS
        var total=0 ;
        for(var i=0;i<arr.length;i++){
            total = total+arr[i];
        }
        console.log(`the sum of the numbers in the array is ${total}`);
}
sum([1,2,3,4,5,6,7,8,9]);

( function(arr){//------------------------IIFE
    var total=0 ;
    for(var i=0;i<arr.length;i++){
        total = total+arr[i];
    }
    console.log(`the sum of the numbers in the array using IIFE is${total}`);
})([1,2,3,4,5,6,7,8,9])
// the sum of the numbers in the array is 45
// script.js:62 the sum of the numbers in the array using IIFE is45
//          output in console

//------------------------------------------------------------
//1st question .d

var isprime = function(num){//--------anonymous
if(num<2){
    return false;
}
for(var i=2;i<num;i++){
    if(num%i==0){
        return false;
    }
}
return true;
}
var numarray =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var result=[];
for(var j=0;j<numarray.length;j++){
    if(isprime(numarray[j])){
        result.push(numarray[j]);
    }
}
console.log(result);
// (6) [2, 3, 5, 7, 11, 13]
//      output on console...

(function prime(num){//-------------IIFE
    if(num<2){
        return false;
    }
    for(var i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
    })([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
    var result2=[];
for(var j=0;j<numarray.length;j++){
    if(isprime(numarray[j])){
        result2.push(numarray[j]);
    }
}
console.log(result2);
// (6) [2, 3, 5, 7, 11, 13]
//      output on console...
//-----------------------------------------------------------------------
//1st question .e

var ispal = function(pal){//-----------anonymous
    var resultpal=[];
for(var i=0;i<pal.length;i++){
    if(pal[i]==pal[i].split("").reverse().join("")){
        resultpal.push(pal[i]);
    }   
}
console.log(resultpal);
}
ispal(["hi","hello","mam","noon"]);


( function(pal){//---------------------IIFE
    var resultpal=[];
for(var i=0;i<pal.length;i++){
    if(pal[i]==pal[i].split("").reverse().join("")){
        resultpal.push(pal[i]);
    }   
}
console.log(resultpal);
})(["hi","hello","mam","noon"])
//(2) ['mam', 'noon'] ---------------output for both functions.
//--------------------------------------------------------------------

//1st questions . f

var m1=[1,2,3,4,5,6];//--------------anonymous
var m2=[7,8,9,10,11,12];

var median = function(arr1,arr2){
   for(var i=0;i<arr2.length;i++){
    arr1.push(arr2[i]);
   }
   if(arr1.length%2==0){
    var step = arr1[(arr1.length/2)]+arr1[(arr1.length/2)-1];
    var med = step/2;
    console.log(med);
   }
   else{
    var med = arr1[Math.floor((arr1.length/2))];
    console.log(med);
   }
 //6.5--------------------output in console.
}
median(m1,m2);
var m12=[1,2,3,4,5,6];
var m22=[7,8,9,10,11,12];

(function(arr1,arr2){//-----------------IIFE
    for(var i=0;i<arr2.length;i++){
     arr1.push(arr2[i]);
    }
    if(arr1.length%2==0){
     var step = arr1[(arr1.length/2)]+arr1[(arr1.length/2)-1];
     var med = step/2;
     console.log(med);
    }
    else{
     var med = arr1[Math.floor((arr1.length/2))];
     console.log(med);
    }
 
 })(m12,m22)
 //6.5--------------------output in console.

 //---------------------------------------------------------------
 //1 st question .g
 var duplicate = function(ara){//------anonymous
    var ea = [];
    for(var i =0;i<ara.length;i++){
    if(!ea.includes(ara[i])){
        ea.push(ara[i]);
    }
    }
    console.log(ea);
 }
 duplicate([11,12,13,11]);
 //(3) [11, 12, 13]0: 111: 122: 13length: 3[[Prototype]]: Array(0)
 //output;

 (function(ara){//-----------IIFE
    var ea = [];
    for(var i =0;i<ara.length;i++){
    if(!ea.includes(ara[i])){
        ea.push(ara[i]);
    }
    }
    console.log(ea);
 })([11,12,13,11]);
 //(3) [11, 12, 13]0: 111: 122: 13length: 3[[Prototype]]: Array(0)
 //output;
 //-----------------------------------------------
 //1 st question.h
 var round = ["dhoni","virat","pandya","sharma"];
//  var r= round.shift(round[0]);
// round.push(r);
// console.log(round);
 var rotates = function(k){
    
    for(var i=1;i<=k;i++){
        round.unshift(a.pop())
    }
    console.log(round);
 }
 rotates(2);
//(4) ['pandya', 'sharma', 'dhoni', 'virat']
var round2 = ["dhoni","virat","pandya","sharma"];
(function(k){
   
    for(var i=1;i<=k;i++){
         round2.unshift(a.pop()) 
    }
    console.log(round2);
 })(1);
 //(4) [ 'sharma', 'dhoni', 'virat', 'pandya']//
 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 //1 st question completed.







 //3rd question arrow functions
 //---a
 //print odd numbers

 var oddaw = (arr)=>{  
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);
        }
    }
    console.log(result);
}
oddaw([1,2,3,4,5,6,7,8]);
//---------------------  3.b
//title caps

var tcaps = (str)=>{
    var sent = str.toLowerCase().split(" ");
    for(var i=0;i<sent.length;i++){
        sent[i]=sent[i][0].toUpperCase() + sent[i].slice(1);
    }
    console.log(sent.join(" "));
}
tcaps("this sentence was in title caps");
//This Sentence Was In Title Caps----0 output
//----------------------------------  3.c
//sum of array

var sumaw=(arr)=>{
    var sum =0;
    for(var i=0;i<arr.length;i++){
        sum = sum +arr[i];
    }
    console.log(sum);
}
sumaw([1,3,5,7,9,11,13,15]);
//64-------output
//--------------------------------- 3.d
//return prime  --

var isprimeaw = (num)=>{
    if(num<2){
        return false;
    }
    for(var i=2;i<num;i++){
        if(num%i==0){
            return false;
        }       
    }
    return true;
}
var resultaw=[];
find=[1,2,5,3,8,9,14,74,8,97];
for(var j=0;j<find.length;j++){
    if(isprimeaw(find[j])){
        resultaw.push(find[j]);
    }
}
console.log(resultaw);
//(4) [2, 5, 3, 97]---output
//------------ 3.e
//return palindrome

var ispalin = (arr)=>{
    var resultp =[];
    for(var i =0;i<arr.length;i++){
        if(arr[i] == arr[i].split("").reverse().join("")){
            resultp.push(arr[i]);
        }
    }
    console.log(resultp);
}
ispalin(["grrot","noon","malayalam","radar"]);
//(3) ['noon', 'malayalam', 'radar']----output
