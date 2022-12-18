// window.alert('1')

// window.confirm('What is your name')

// // const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')
// const heading2 = document.getElementsByClassName('h2-class')
// const heading2 = document.querySelector('h2') //.h2-class, #sub-hello //первый,крирпый нашел

// setTimeout(() => {
//     heading.textContent = 'Changed from Javascript'
//     heading.style.color = 'red'
//     heading.style.textAlign = 'center'
//     heading.style.backgroundColor = 'black'
//     heading.style.padding = '2rem'
// }, 1500);

// setTimeout(() => {
//     addStylesTto(heading)
// }, timeout);


// function addStylesTto(node) {
//     node.textContent = 'Changed from Javascript'
//     node.style.color = 'red'
//     node.style.textAlign = 'center'
//     node.style.backgroundColor = 'black'
//     node.style.padding = '2rem'
// }

function addStylesTto(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    //falsy: '', undefined, null, 0, false
    if (fontSize){
        node.style.fontSize = fontSize
    }
}

//События

headind.onclick = () => {
    //console.log('click') //mdn mouse event
    if (headind.style.color === 'red') {
        headind.style.color = '#000'
        headind.style.backgroundColor = '#fff'
    }
    else {
        headind.style.color = ''red''
        headind.style.backgroundColor = '#000'
    }
}

headind2.addEventListener('dblclick', () => {
    if (headind2.style.color === 'yellow') {
        headind2.style.color = '#000'
        headind2.style.backgroundColor = '#fff'
    }
    else {
        headind2.style.color = 'yellow'
        headind2.style.backgroundColor = '#000'
    }
}
})