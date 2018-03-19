function selectionSort(unsortedList: Array<number>) {
    let sortedList = [];
    for (let j = 0; j < unsortedList.length; j++) {
        let currentNumber = {
            key: j,
            value: unsortedList[j]
        };
        let smallestNumber = {
            key: 0,
            value: Number.POSITIVE_INFINITY,
        };
        for (let i = j; i < unsortedList.length; i++) {

            if (unsortedList[i] < smallestNumber.value) {
                smallestNumber.key = i;
                smallestNumber.value = unsortedList[i]
            }
        }
        sortedList.push(smallestNumber.value);
        unsortedList[smallestNumber.key] = currentNumber.value;
    }
    return sortedList;
}

function insertionSort(unsortedList: Array<number>) {
    let sortedList = [];
    for (let i = 0; i < unsortedList.length; i++) {
        let currentNumber = {
            key: i,
            value: unsortedList[i]
        };
        let placed = false;

        for (let j = 0; j <= sortedList.length; j++) {

            if (sortedList[j] > currentNumber.value || sortedList.length === 0) {
                sortedList.splice(j, 0, currentNumber.value);
                placed = true;
                break;
            }

        }
        if (!placed) {
            sortedList.push(currentNumber.value);
        }
    }
    return sortedList;
}

function mergeSort(unsortedList: Array<number>) {
    let listOfLists = makeListOfLists(unsortedList);

    while (listOfLists.length > 1) {
        let newList = [];
        while (listOfLists.length >= 1) {
            newList.push(mergeLists(listOfLists.shift(), listOfLists.shift()));
        }
        listOfLists = newList
    }

    return listOfLists[0];
}

function mergeLists(listOne: Array<number>, listTwo?: Array<number>) {
    let combinedList = [];
    if (listTwo === undefined) {
        return listOne;
    }
    while (listOne.length > 0 || listTwo.length > 0) {

        if (listOne[0] <= listTwo[0] || listTwo.length === 0) {
            combinedList.push(listOne.shift());
        } else {
            combinedList.push(listTwo.shift());
        }
    }
    return combinedList;
}

function makeListOfLists(list: Array<number>) {
    let listOfLists = [];

    for (let number of list) {
        listOfLists.push([number]);
    }
    return listOfLists;
}

console.log(selectionSort([5, 6, 7, 1, 4, 3, 7, 1]));
console.log(insertionSort([11, 6, 7, 1, 4, 3, 7, 1, 9, 102, 2, 40, 1, 5, 4, 5, 4, 0]));
console.log(mergeSort([11, 6, 7, 1, 4, 3, 7, 1, 9, 102, 2, 40, 1, 5, 4, 5, 4, 0]));

