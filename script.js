// Song: "Row, Row, Row Your Boat"

// Extract repeated lines into a refrain() and call it

function refrain() {
  console.log("Row, row, row your boat,");
  console.log("Gently down the stream,");
  console.log("Merrily, merrily, merrily, merrily,");
  console.log("Life is but a dream.");
}

function song() {
  refrain();       
  console.log(""); 
  refrain();       
}

// Use return to build a single string, then log it

function refactoredRefrain() {
  return "Row, row, row your boat,\n"
       + "Gently down the stream,\n"
       + "Merrily, merrily, merrily, merrily,\n"
       + "Life is but a dream.";
}

function refactoredSong() {
  console.log(refactoredRefrain());
  console.log(""); 
  console.log(refactoredRefrain());
}

// printedSong();
// song();
refactoredSong(); 

