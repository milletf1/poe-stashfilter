/**
 * The purpose of this script is to generate a summary of each item in a test data file.
 * TODO: add support for command line args
 */
"use strict"

const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");


// Configuration


/** Path to file that has items to summarise */
const ITEMS_FILE_PATH = "/../league-items/heist-test-items.json";
/** Name of file that the summary will be written to */
const LOG_FILE_NAME = "item-summary";
/** Extra item properties that should be included in the summary */
const EXTRAS = [];


// Script


const filePathTokens = ITEMS_FILE_PATH.split(/\/|\\/g);
const fileName = filePathTokens[filePathTokens.length - 1];
console.log(`\nSummarising file:\n\t${fileName}\n`);

const items = getItems();
const content = createFileContent(items);
writeFile(content);

/** 
 * Returns items found in the `ITEMS_FILE_PATH` file
 */
function getItems() {
  const filePath = path.join(__dirname, ITEMS_FILE_PATH);
  const file = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
  return JSON.parse(file);
}

/**
 * Returns the content of the summary file
 * @param {array} items Items that are used to generate the file content
 */
function createFileContent(items) {
  const lines = createFileContentLines(items);
  return lines.join("\n");
}

/**
 * Returns an array of strings that are used to create lines in the file
 * @param {array} items Items that are used to create lines
 */
function createFileContentLines(items) {
  const lines = [];
  items.forEach(summariseItem(lines));
  lines.splice(lines.length - 1, 1);
  return lines;
}

/**
 * Returns a function that pushes item summary data to an array
 * @param {array} lines The array that the returned function will push item summary data to
 */
function summariseItem(lines) {
  return (item) => {
    lines.push(`name: ${item.name}`);
    lines.push(`typeLine: ${item.typeLine}`);
    lines.push(`icon: ${item.icon}`);

    EXTRAS.forEach(extra => {
      const value = JSON.stringify(item[extra]) || "";
      lines.push(`${extra}: ${value}`);
    });

    lines.push(Object.keys(item).join(", "));
    lines.push("");
  }
}

/**
 * Creates an item summary file in the `log` directory
 * @param {string} content File content
 */
function writeFile(content) {
  // create directory
  const directory = path.join(__dirname, "../log");
  mkdirp.sync(directory);
  // create file
  const fileName = `${directory}/${LOG_FILE_NAME}-${new Date().getTime()}.log`;
  fs.writeFile(fileName, content, "utf-8", err => {
    console.log(err ? err : `Wrote item summary to:\n\t${fileName}`);
  });
}