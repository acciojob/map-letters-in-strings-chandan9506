//your JS code here. If required.
function mapLetters(str) {
	let obj = {};
	for (let i = 0; i < str.length; i++) {
		let t = str[i];
		if(obj[t] == undefined){
			obj[t] = [i];
		}
		else{
			obj[t].push(i);
		}
	}
	return obj;
}
const str = prompt("enter a string: ");
alert(JSON.stringify(mapLetters(str)));