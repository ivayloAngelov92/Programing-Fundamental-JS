function solve(a, b, c) {
    let res = a + b + c
    if (res % 1 == 0) {
        console.log(`${res} - Integer`);
    }else{
        console.log(`${res} - Float`);
    }
}

solve(100, 200, 303)