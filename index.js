
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

let num=22      
let prime=true

if(num<=1){
    
    isprime=false
}
else{

    for(i=2;i=num;i++){
  
          if(num%2==0) {

            isprime=false
            break
          }
    }
}
if(isprime==true){
    console.log("prime")
}
else{
    console.log("not prime")
}