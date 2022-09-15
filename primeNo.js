
// program to check if a number is prime or not if its prime print "Yes" else print "No".

let num = 19;
let count = 0;

 for(let i=0;i<=num;i++){
        if(num%i==0){
          count++     
        }
    }
    if(count==2){
        console.log("Yes");
    } else {
        console.log("No");
    }
    

