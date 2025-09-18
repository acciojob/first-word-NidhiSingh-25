function firstWord(s) {
  // your code here
	  if (!s) return ""; // handle empty string

  s = s.trim(); // remove leading/trailing spaces

  let spaceIndex = s.indexOf(" ");

  if (spaceIndex === -1) {
    return s; // no space found, return entire string
  }

  return s.substring(0, spaceIndex); // return part before space
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
