function solve(array){
    for(let i=0; i<array.length;i++){
        array[i]=Number(array[i])
    }
    let sum=0
    for(let num of array){
        if(num%2==0){
            sum+=num
        }
    }
    console.log(sum);
}

solve (['1','2','3','4','5','6'])