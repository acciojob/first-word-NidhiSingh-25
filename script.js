function firstWord(s) {
  // your code here
	 if (!str) return ""; // handle empty string

  str = str.trim(); // remove leading/trailing spaces

  let spaceIndex = str.indexOf(" ");

  if (spaceIndex === -1) {
    return str; // no space found, return entire string
  }

  return str.substring(0, spaceIndex); // return part before space

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
