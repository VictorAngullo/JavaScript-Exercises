var alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach(element => {
    if (element.T1 === false && element.T2 === true && element.T3 === true ) {
        element.isApproved = true
    } if (element.T1 === true && element.T2 === false && element.T3 === true) {
        element.isApproved = true
    } if (element.T1 === true && element.T2 === true && element.T3 === false) {
        element.isApproved = true
    } else {
        element.isApproved = false
    }
});