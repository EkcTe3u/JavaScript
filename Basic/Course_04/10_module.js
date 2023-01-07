// no conflict
(
    function(){
const message = 'Hello!'
function showMessage() {
    console.log(message);
}
showMessage()}()
)


+function(){
    const message = 'Hello!'
    function showMessage() {
        console.log(message);
    }
showMessage()}()

(function(){})()
+function() {}()
!function() {}()
(function(){}())
