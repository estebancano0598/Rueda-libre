function amonkeyTrouble(aSmile, bSmile){
    return ((aSmile && bSmile) || !(aSmile && bSmile));
}

console.log(amonkeyTrouble(true,false))