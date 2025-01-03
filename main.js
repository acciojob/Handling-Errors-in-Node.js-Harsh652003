const fs = require('fs');
const path = require('path');

function printFileContents(filePath) {
  if (!filePath) {
    console.error("Error: No file path provided. Please specify a file path.");
    process.exit(1);
  }


  const resolvedPath = path.resolve(filePath);

  fs.readFile(resolvedPath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`Error: File not found at path '${resolvedPath}'.`);
      } else {
        console.error(`Error: Unable to read the file. Details: ${err.message}`);
      }
      process.exit(1);
    }

    console.log("File Content:");
    console.log(data);
  });
}


const filePath = process.argv[2];
printFileContents(filePath);

