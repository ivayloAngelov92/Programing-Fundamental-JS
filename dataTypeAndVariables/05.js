function solve(a){
    a=a.toString()
    let sum=0
    for(let i=0; i<a.length; i++){
        sum+=Number(a[i])
    }
    let result= sum.toString().includes('9')
    console.log(result ? 
        `${a} Amazing? True` :
        `${a} Amazing? False`);
}

solve (999)