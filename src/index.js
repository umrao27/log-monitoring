import path from "path";
import { parseLogFile } from "./services/parseLogFile.js";
import { calculateJobDuration } from "./services/calculateJobDuration.js";
import { generateReport } from "./services/reportGenerator.js";

/* Gets the absolute path to the logs.log file in project’s root directory.
    - process.cwd() => returns the current working directory
    - path.join => combines it with "logs.log" to create the full file path.
*/
const logFilePath = path.join(process.cwd(), "logs.log");

const logs = parseLogFile(logFilePath);
const results = calculateJobDuration(logs);
generateReport(results);