

function Sumtion(num){
    if ( num == 1){   // Base Case
        return 1;
    }
    else{
        return num + Sumtion(num -1) 
    }
}



//console.log(Sumtion(2));


function Fact(num){
    if (num == 1){
        return 1;
    }
    else{
        return num * Fact(num-1)
    }
}


//console.log(Fact(3))


function Fib(num,prevValues= []){
    if(prevValues[num] != null){
        return prevValues[num]
    }
    let result;
    if( num == 0){
        return 0;
    }
    if( num == 1){
        result = 1;
    }
    else{
        result= Fib(num-1,prevValues) + Fib(num - 2,prevValues);
    }
    prevValues[num] = result
    
    console.log(prevValues)
    return result
}

console.log( Fib(3)   );


// 0 1 1 2 3  