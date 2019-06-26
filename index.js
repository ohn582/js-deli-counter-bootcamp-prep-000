//people:

//otherDeli = [22, 23, 24];

//player:
//25

var num1 = 25;

function takeANumber(Deli) {
	  Deli.push(num1);
		return `Welcome, ${player}. ` + `You are number ${Deli.length} in line.`;
}

//return `Welcome, ${i}. ` + `You are number ${people.length} in line.`;




//const deliLine = ["Steven", "Blake", "Avi"];
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}





//currentLine(["Bill", "Jane", "Ann"])
function currentLine(line) {
	var newLine = [];
    
    if (line.length > 0) {
  		  for (var i = 0; i < line.length; i += 1) {
  	 		  newLine.push(`${i + 1}. ` + `${line[i]}`);
      	}
      	return `The line is currently: ${newLine.join(', ')}`;
    } else {
        return 'The line is currently empty.';
    }

}


