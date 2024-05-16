
// 5  = 5 + 4 + 3 + 2 + 1 + 0 



function sumtion(num){
    if ( num == 1 ){                    //Base Case 
        return 1;
    }
    else{
        return num + sumtion(num-1)     // progress forward 
    }
}


//console.log(sumtion(5))


// 3!  = 3 * 2 * 1 = 6

// 5! = 5 * 4 * 3 * 2 * 1 = 120

function Fact(num){
    if ( num == 1){          //Base Case
        return 1;
    }
    else{
        return num * Fact(num - 1)          //Progress Forward
    }
}


//console.log(Fact(5))

function FactLoop(num){
    let result =1;
    for ( var i = 1 ; i <= num;i++){
        result = i * result
    }
    return result;
}

console.log(FactLoop(5))


// 0 ,  1  , 1, 2 , 3, 5 , 8 , .... 

//F(n) = F(n-1) + F(n-2)


////F(3) = F(2) + F(1)  =   1 + 1 = 2

function Fib(num){
    if ( num == 0){      //Base Case
        return 0;
    }
    if( num == 1){
        return 1;
    }
    else{
        return Fib(num- 1) + Fib(num -2) //Forward Progress

    }

}

console.log(Fib(5))







