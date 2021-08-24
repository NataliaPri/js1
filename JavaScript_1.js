let n = 100;

nextPrime:
for (let i = 0; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime; 
    }

    console.log(i);
}
