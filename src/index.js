import path from "path";
import express from "express";
import { parseLogFile } from "./services/parseLogFile.js";
import { calculateJobDuration } from "./services/calculateJobDuration.js";
import { generateReport } from "./services/reportGenerator.js";

const app = express();
const PORT = 3000;

/* Gets the absolute path to the logs.log file in project’s root directory.
    - process.cwd() => returns the current working directory
    - path.join => combines it with "logs.log" to create the full file path.
*/
const logFilePath = path.join(process.cwd(), "logs.log");

app.get("/", (req, res) => {
  const logs = parseLogFile(logFilePath);
  const results = calculateJobDuration(logs);
  const report = generateReport(results);
  res.send(`<pre>${report}</pre>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});