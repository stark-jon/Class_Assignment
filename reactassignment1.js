//Question 1 to convert any provided number into minutes

function convert(x){
    return x*60;
}

console.log(convert(20));

//Question 2 to check a number is divisible by another number or not 

function dividesEvenly(a,b){
    if(a%b===0){
        return true;
    }
    else{
        return false;
    }
}

console.log(dividesEvenly(20,4));

//Question 3 to count instances of a character in a string

function charCount(chr,str) {
    let c=0;
    for(i=0;i<str.length;i++){
       if(str[i]==chr){
           c++;
       }
    }
    return c;
}

console.log(charCount('h','harshit'));

//Question 4 to count the numbers from one to the given number

function sumUp(z){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum=sum+i;
    }
    return sum;
}

console.log(sumUp(10));