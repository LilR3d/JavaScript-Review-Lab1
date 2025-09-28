// Song: "Row, Row, Row Your Boat"

// Extract repeated lines into a refrain() and call it

function refrain() {
  console.log("Row, row, row your boat,");
  console.log("Gently down the stream,");
  console.log("Merrily, merrily, merrily, merrily,");
  console.log("Life is but a dream.");
}

function song() {
  refrain();       // first verse (refrain)
  console.log(""); // blank line
  refrain();       // second verse (same lines, reused)
}

// Use return to build a single string, then log it

function refactoredRefrain() {
  // \n = newline character
  return "Row, row, row your boat,\n"
       + "Gently down the stream,\n"
       + "Merrily, merrily, merrily, merrily,\n"
       + "Life is but a dream.";
}

function refactoredSong() {
  console.log(refactoredRefrain());
  console.log(""); // blank line between verses
  console.log(refactoredRefrain());
}

// printedSong();
// song();
refactoredSong(); // final refactored version (recommended)

