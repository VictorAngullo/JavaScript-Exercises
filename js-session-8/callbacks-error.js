const list = ["Jose", "Alberto", "Cristian"];

setTimeout(() => {
    list.push('Mario')

    printList(list);
}, 2000);

list.push("Pedro");

const printList = (list) => {
    console.log(list);
}