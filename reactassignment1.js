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

//Question 3 to count instances of a character in a tring

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