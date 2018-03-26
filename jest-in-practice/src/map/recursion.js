const sum = (arr) => {

    if (arr.length === 0) {
        return 0
    }

    const [head, ...tail] = arr

    return head + sum(tail)
}


console.log(sum([1,5,3]))