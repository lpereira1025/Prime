function snapCracklePrime(maxValue){
    let array = []

    for(let i = 1; i <= maxValue; i++){

            

            if(i % 5 == 0 && i % 2 == 1 && primos(i)){
                array.push("SnapCracklePrime")
            }else if(i % 5 == 0 && i % 2 == 1 ){
                array.push("SnapCrackle")
            }else if(i % 2 == 1 && primos(i)){
                array.push("SnapPrime")
            }else if(i % 2 == 1){
                array.push("Snap")
            } else if(i % 5 == 0){
                array.push("Crackle")
            }else if(primos(i)){
                array.push("Prime")
            }else{
                array.push(i)}

                
        }


    return array
}
console.log(snapCracklePrime(15))



function primos(extra){

    for(let i = 2; i < extra; i++ ){
        if(extra % i == 0){
            return false  
        }  
    } 
    if(extra > 1){
        return true
    }else{
        return false
    }

}