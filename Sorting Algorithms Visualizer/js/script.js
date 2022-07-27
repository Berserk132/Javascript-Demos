// imports
import {SWAP, changeColors} from '../helpers/helper.js';
import {bubbleSort} from '../algorithms/BubbleSort.js';

// Initiallization
let arr = [47, 20, 50, 9, 11, 13, 25, 11, 2, 1, 8, 9 ,7, 5, 4, 11, 3, 2, 1, 8, 80, 60]
let maxHeight = 250
let maxNumber = 80
let currentX = 100;

// DOM
let btnSort = document.getElementById('btn-sort')



// create text element

for (let i = 0; i < arr.length; i++)
{

    let g = d3.select('svg')
    .append('g')
    .attr("transform",function() { return   `translate(${currentX}, ${210 + (250 - ((arr[i]/50)*250))})`;});


    g.append('rect')
    .attr('height', (arr[i]/50)*250)
    .attr('width', 20)
    .style('fill', 'grey')

    g.append('text')
    .attr('font-size', `${10}px`)
    .attr('dy', `${.15}em`)
    .attr('x', 5)
    .attr('y', (arr[i]/50)*250 - 20)
    .text(() => {return arr[i];})

    currentX+=50
}



let barsArr = document.getElementsByTagName('g')
let gElements = []
for (let i = 0; i < barsArr.length; i++) {

    gElements.push(barsArr[i])
}





btnSort.addEventListener('click', () => {

    bubbleSort(gElements, {SWAP, changeColors})
    btnSort.setAttribute('disabled', true)
})