import { getElementNumber, getPosition } from '../helpers/helper.js';

let bubbleSort = async (inputArr, options) => {
    let len = inputArr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            let first = getElementNumber(inputArr[j])
            let second = getElementNumber(inputArr[j + 1])
            if (first > second) {
                let firstPosition = getPosition(inputArr[j])
                let secondPosition = getPosition(inputArr[j+1])
                
                
                await options.changeColors(inputArr[j], inputArr[j+1])
                
                inputArr[j].setAttribute('transform', `translate(${parseInt(firstPosition[0]) + 50}, ${parseInt(firstPosition[1])})`)
                inputArr[j+1].setAttribute('transform', `translate(${parseInt(secondPosition[0]) - 50}, ${parseInt(secondPosition[1])})`)

                await options.SWAP(inputArr, j)
                // swap the element in the array
                // let tmp = inputArr[j]
                // inputArr[j] = inputArr[j+1]
                // inputArr[j+1] = tmp
            }
        }
    }
    return inputArr;
};

export {bubbleSort}