(() =>{

    /* Its a interface that does for look for this form */
    interface addTwoNumbers {
        (a: number, b: number):  number
    }

    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = (a: number, b: number) => {
        return 10;
    };
})()