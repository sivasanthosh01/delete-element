var size=parseInt(prompt("enter the size of array"));
var arr=[];
for(let i=0;i<size;i++){
	arr[i]=parseInt(prompt("enter the "+(i+1)+" array value:"));
}
document.write("The array values are"+arr+"<br>");
var b=parseInt(prompt("enter the position of elements you delete"));
var del=parseInt(prompt("enter the how many elements you delete")); 
arr.splice(b,del);
document.write(arr);
console.log(arr);