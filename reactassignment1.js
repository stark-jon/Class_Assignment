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

//Question 5 to replace the vowels with different characters

function replaceVowel(str){
    for (let i = 0; i < str.length; i++) {
        str=str.replace('a',1);
        str=str.replace('e',2);
        str=str.replace('i',3);
        str=str.replace('o',4);
        str=str.replace('u',5);
    }
    return str;
}

console.log(replaceVowel('harshit'));

//Question 7 to check if all the elements in the array are identical

function testJackpot(arr){
    let count=0;
    for(let i=0;i<=3;i++){
        if(arr[i]!=arr[i+1]) count++;
    }
    if(count==0) return true;
    else return false;
}

const array = ['@@','@@','@@','@@'];
console.log(testJackpot(array));

//Question 8 to remove duplicates from an array

function removeDups(arr1){
    return [...Set(arr1)];
}

var array1 = ['apple','banana','mango','apple','guava']
console.log(removeDups(array1));

//Question 9 to get the real data type of a variable

function realType(val) {
    return {}.toString.call(val).slice(8, -1); //found this answer in stackoverflow
}




// Was not able to complete question 6 and 10, still working on the solutions but none of them are working perfectly






