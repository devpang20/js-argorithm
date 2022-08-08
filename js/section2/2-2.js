const solution = (num, arr) => {
     let answer = 1
     let max = arr[0];
    for (let i = 0; i < arr.length; i++ ) {
         if (arr[i] > max) {
           max = arr[i]
            answer++
        }
    }
    return answer
}

const ex = [130, 135, 148, 140,145, 150, 150, 153]
solution(8, ex)
