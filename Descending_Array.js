let size=Number(prompt("enter a size of Array"))
let array=[]
for(var i=0;i<size;i++) {
    array[i]=Number(prompt('enter element ' +(i+1)))
}
function arrSort(array) { 
	array.sort((a,b)=>a-b)
	array.reverse()
	return array
} 
console.log(arrSort(array));