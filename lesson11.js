const fs = require('fs');
const readline = require('readline');

// Function to count the number of words in a string
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

// Read the input file
const readableStream = fs.createReadStream('F:\\testProjectUKD\\tests2.txt');
const rl = readline.createInterface({
  input: readableStream,
  output: process.stdout,
  terminal: false
});

let totalWordCount = 0;

// Display each line of the file in the console and count the number of words
rl.on('line', (line) => {
  console.log(line);
  const wordCount = countWords(line);
  totalWordCount += wordCount;
});

// Print the total word count when the readable stream ends
rl.on('close', () => {
  console.log(`Total word count: ${totalWordCount}`);
  process.exit(0);
});