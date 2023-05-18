export function arrayToFormattedStr(array: String[]) {
	let formattedString = "";
	for (let element = 0; element < array.length; element++) {
		if (array.length == 1) {
			formattedString += `${array[element]}`
			break;
		} 
		if (element == array.length - 1) {
			formattedString += `${array[element]}`
			break;
		} 

		formattedString += `${array[element]}, `
	}
	return formattedString;
}
