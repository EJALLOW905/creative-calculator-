// <!-- implementing the logic for the input values  -->

let screen=document.getElementById("output-screen")
function display(num){
    screen.value += num;    
}
// implementing the calculation logic
function calculate(){
try {
screen.value=eval(screen.value);    
} 
// catching an error input 
catch (err){
alert('invalid input.')    
}  
} 
// implementing the clear logic
function Clear(){
screen.value="";    
}
// implementing the delete logic
function del (){
screen.value=screen.value.slice(0,-1);
}