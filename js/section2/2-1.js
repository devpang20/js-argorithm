const solution = (num, arr) => {
    return arr.filter(item => item >= num)
}

const ex = [7, 3, 9, 5, 6, 12]
solution(6, ex)
