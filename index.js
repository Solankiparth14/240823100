
//1
// a=7
// if(a%2==0){
//     console.log('even')
// }
// else{
//     console.log('odd')
// }

//2

//  a=5
//  b=9
//  if(a<b)
//  {
//      console.log('larger number')
//  }
//  else
// {
//     console.log('small number')
// }


// 3

// leap=2020

// if(leap%4==0)
// {
//     console.log('leap year')
// }
// else{
//     console.log('year')
// }

// //4


// num=5
// sum=0

// for(i=1;i<=num;i++){
    
//     sum=sum+i
    
// }
//    console.log(sum)

// //  5

// const fac=5
// var sum=1

//  for(i=fac ; i>1;i--)
//  {
//      sum=i*sum
//  }
//  console.log(sum)

//  6
 
//  a=5


// for(i=1;i<=10;i++)
// {
//     console.log(a+"*"+i+"="+i*i)
// }


// 7

// let num=1234
// let rev=0
// let temp=num

// for(i=1;temp!=0;i++){
//               let value=temp%10;
//               rev=rev*10+value
//               temp=Math.floor(temp/10)

// }
// console.log(rev)

//8

// let a=191
// let num=a
// let n=0

// for(i=1;a!=0;i++){

//     n=n*10+(a%10)
//     a=Math.floor(a/10)

// }

// if(num==n){
//     console.log("pailndrom")

// }else{
//     console.log('not pailndrom')
// }

 //9

// let num=22      
// let prime=true

// if(num<=1){
    
//     isprime=false
// }
// else{

//     for(i=2;i=num;i++){
  
//           if(num%2==0) {

//             isprime=false
//             break
//           }
//     }
// }
// if(isprime==true){
//     console.log("prime")
// }
// else{
//     console.log("not prime")
// }


// 10

// let num=1221
// let sum=0

// while(num>0){
//     num=Math.floor(num/10)
//     sum++
// }
// console.log(sum)


// 11

// let num=23
// let sum=0

// for(i=0;i<String(num).length;i++){

//     sum+=Number(String(num)[i])

// }
// console.log(sum)

// 12

// let num=153
// let digit=String(num)
// let sum=0

// for(i=0;i<digit.length;i++){

//     sum+=Math.pow(Number(digit[i]),digit.length)
// }
// if(sum==num){
//     console.log('number is armstrong')
// }
// else{
//     console.log('number is not armstrong')
// }


// 13

// let count=5;
// let a=0
// let b=1

// for (let i = 0; i < count; i++) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }

// 14
//  let  char='v'

//  if(char=='a'|| char =='e' || char=='i' || char =='o'|| char =='u' ||char=="A" ||char=="E" ||char=="I" ||char=="O" ||char=="U")
//  {
//      console.log("vowel")
//  }  
//  else{
//      console.log("char")
//  }



// 15
// let a=15
// let b=20
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)

// 16

// let a=20
// let b=28
// let gcd=1

// for(i=1;i<=a && i<=b; i++)
// {
//     if(a%i==0 && b%i==0)
//     {
//         gcd=i
//     }
// }
// console.log(gcd)

// 17

// let a=28
// let sum=0

// for(i=1;i<a;i++)
// {
//     if(a%i==0){
//         sum+=i
//   }
// }

// if(sum==a){
//     console.log(a+" perfect number ")
// }
// else{
//     console.log(a+" not perfect number")
// }


// 18

// let num=10

// console.log("divisors of,num,are:")

// for(i=1;i<=num;i++)
// {
//   if(num%i==0)
//     {
//         console.log(i)
//     } 
     
// }

// 19

// let a=-5

// if(a>0){
//     console.log('p')
// }
// else if(a<0)
//     {
//     console.log('n')
//     }
// else
// {
//   console.log('o')
// }

let a=2
let b=3

let c=a**b

console.log("power"+c)
