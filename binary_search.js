let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;
function binary_search (array, item) {
    let start = 0;
    let middle;
    let end = array.length;
    let flag = false;
    let position = -1;
    while (flag === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            flag = true;
            position = middle;
            return middle;
        } else if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

console.log(binary_search(array, 15));
console.log(count);