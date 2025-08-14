/**
 * Prints warnings/errors based on thresholds
 * - Warning if > 5 minutes
 * - Error if > 10 minutes
 */
export function generateReport(results) {
  const WARNING_THRESHOLD = 5 * 60; 
  const ERROR_THRESHOLD = 10 * 60;  
  let output = "";

  for (const job of results) {
    const convertToMin = (job.durationSec / 60).toFixed(2); // Convert seconds to minutes with 2 decimal places
    if (job.durationSec > ERROR_THRESHOLD) {
      output += `<b>ERROR</b>: Job "${job.description}" (PID: ${job.pid}) took ${convertToMin} minutes\n </br>` ;
    } else if (job.durationSec > WARNING_THRESHOLD) {
       output += `<b>WARNING</b>: Job "${job.description}" (PID: ${job.pid}) took ${convertToMin} minutes\n </br>`;
    } else {
       output += `<b>OK</b>: Job "${job.description}" (PID: ${job.pid}) took ${convertToMin} minutes\n </br>`;
    }
  }
    return output;
}
