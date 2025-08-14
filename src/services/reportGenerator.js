/**
 * Prints warnings/errors based on thresholds
 * - Warning if > 5 minutes
 * - Error if > 10 minutes
 */
export function generateReport(results) {
  const WARNING_THRESHOLD = 5 * 60; 
  const ERROR_THRESHOLD = 10 * 60;  

  for (const job of results) {
    convertToMin = (job.durationSec / 60);
    if (job.durationSec > ERROR_THRESHOLD) {
      console.error(`ERROR: Job "${job.description}" (PID: ${job.pid}) took ${convertToMin} minutes`);
    } else if (job.durationSec > WARNING_THRESHOLD) {
      console.warn(`WARNING: Job "${job.description}" (PID: ${job.pid}) took ${convertToMin} minutes`);
    } else {
      console.log(`OK: Job "${job.description}" (PID: ${job.pid}) took ${convertToMin} minutes`);
    }
  }
}
