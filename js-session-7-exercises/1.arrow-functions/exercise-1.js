const potato = (a = 10, b = 5) => {
    console.log(a + b)
}

potato(); // 15
potato(20); // 25
potato(50, 10); // 60


const potato = (a, b = 5) => {
    console.log(a + b)
}


const plin = (a = 10, b = 5) => {
    console.log(a + b);
}

plin();
plin(25);
plin(50, 25);
