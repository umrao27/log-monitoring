import fs from "fs"; 

/**
 * Parse the CSV log file and returns an object which contains 
 * the time, description, status, and pid of each log entry.
 */
export function parseLogFile(logFilePath) {
logFilePath = fs.readFileSync(logFilePath, "utf8");
  const rows = logFilePath.split("\n");
  return rows.map((row) => {
    const [time, description, status, pid] = row.split(",");
    return {
      time: time,
      description: description,
      status: status,
      pid: pid
    };
  })
};