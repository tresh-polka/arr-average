const calculateAverage = (arr) => {
    let average = 0
    let sum = 0
    let length = arr.length

    for (const numb of arr) {
        sum += numb
    }
    average = sum / length
  
    return average
  }
  
export {calculateAverage}