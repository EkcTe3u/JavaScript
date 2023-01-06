// function startup() {
//     // do something good
// }
// window.onload = startup;

// window.onload = function() { /*do something good */ }

// var text = ' Domo arigato ! ';
// assert ( useless ( function () { return text ; }) === text , "The useless funct ion works ! "+ text ) ; 

// const values = [1, 15, 155, 222, 2, 4, 1999, 18]
// const sort = values.sort()
// console.log(sort);

// const a = function () {
//     return 'Hello'
// }
// console.log(a());

// if (window) {
//     var х = 213;
// }
// alert(х) ;

// function outer () {
//     var а = 1;
//     function inner() {
//          /* ничего не делает */
//      }
//     var Ь = 2;
//     if (а == 1){
//     var c = 3;
//     }
// }
// outer();

// вызов в виде функции
function aaa() {
    console.log('aaa');
}
aaa()

const bbb = function(){
    console.log('bbb');
}
bbb()

// вызов в виде метода

var o = {}
o.whatever = function(){
    console.log('whatever');
}
o.whatever()

// в виде конструктора

function greep(){
    return this
}
new greep()

// вызов с помощью apply() и call()

