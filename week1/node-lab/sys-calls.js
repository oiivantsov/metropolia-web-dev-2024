const fs = require('fs');
const os = require('os');

// Step 1: File System Operations
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File contents:', data);
  }
});

fs.writeFile('output.txt', 'This is some sample data.', (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('Data written to output.txt');
  }
});

// Step 2: Operating System Information
console.log("Platform: " + os.platform());
console.log("Hostname: " + os.hostname());
console.log("Architecture: " + os.arch());