const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


let changeColors = async (first, second) => {

    
    first.children[0].style['fill'] = 'red'
    second.children[0].style['fill'] = 'blue'
    await delay(50)
}

let SWAP = async (arr, index) => {

    let tmp = arr[index]
    arr[index] = arr[index+1]
    arr[index+1] = tmp

    await delay(100)

    arr[index].children[0].style['fill'] = 'grey'
    arr[index+1].children[0].style['fill'] = 'grey'
}

function getElementNumber(element) {

    return parseInt(element.children[1].innerHTML) 
}

function getPosition(element) {

    let tmp = element.getAttribute('transform')
    tmp = tmp.replace('translate(', '').replace(')', '').split(',')
    return tmp
}


export {SWAP, changeColors, getElementNumber, getPosition}