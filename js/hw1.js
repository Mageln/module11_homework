function countElements(arr) {
    let even_count = 0;
    let odd_count = 0;
    let zero_count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null) {
            continue;
        } else if (arr[i] === 0) {
            zero_count++;
        } else if (arr[i] % 2 === 0) {
            even_count++;
        } else {
            odd_count++;
        }
    }

    console.log(`Количество четных элементов: ${even_count}`);
    console.log(`Количество нечетных элементов: ${odd_count}`);
    console.log(`Количество нулевых элементов: ${zero_count}`);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, null,];
countElements(arr);