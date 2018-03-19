function selectionSort(unsortedList) {
    var sortedList = [];
    for (var j = 0; j < unsortedList.length; j++) {
        var currentNumber = {
            key: j,
            value: unsortedList[j]
        };
        var smallestNumber = {
            key: 0,
            value: Number.POSITIVE_INFINITY,
        };
        for (var i = j; i < unsortedList.length; i++) {
            if (unsortedList[i] < smallestNumber.value) {
                smallestNumber.key = i;
                smallestNumber.value = unsortedList[i];
            }
        }
        sortedList.push(smallestNumber.value);
        unsortedList[smallestNumber.key] = currentNumber.value;
    }
    return sortedList;
}
function insertionSort(unsortedList) {
    var sortedList = [];
    for (var i = 0; i < unsortedList.length; i++) {
        var currentNumber = {
            key: i,
            value: unsortedList[i]
        };
        var placed = false;
        for (var j = 0; j <= sortedList.length; j++) {
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
function mergeSort(unsortedList) {
    var listOfLists = makeListOfLists(unsortedList);
    while (listOfLists.length > 1) {
        var newList = [];
        while (listOfLists.length >= 1) {
            newList.push(mergeLists(listOfLists.shift(), listOfLists.shift()));
        }
        listOfLists = newList;
    }
    return listOfLists[0];
}
function mergeLists(listOne, listTwo) {
    var combinedList = [];
    if (listTwo === undefined) {
        return listOne;
    }
    while (listOne.length > 0 || listTwo.length > 0) {
        if (listOne[0] <= listTwo[0] || listTwo.length === 0) {
            combinedList.push(listOne.shift());
        }
        else {
            combinedList.push(listTwo.shift());
        }
    }
    return combinedList;
}
function makeListOfLists(list) {
    var listOfLists = [];
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var number = list_1[_i];
        listOfLists.push([number]);
    }
    return listOfLists;
}
console.log(selectionSort([5, 6, 7, 1, 4, 3, 7, 1]));
console.log(insertionSort([11, 6, 7, 1, 4, 3, 7, 1, 9, 102, 2, 40, 1, 5, 4, 5, 4, 0]));
console.log(mergeSort([11, 6, 7, 1, 4, 3, 7, 1, 9, 102, 2, 40, 1, 5, 4, 5, 4, 0]));
