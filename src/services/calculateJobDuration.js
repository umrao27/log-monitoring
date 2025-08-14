import { timeToSeconds } from "../utils/timeUtils.js";

/**
 * Get logs and calculate job duration 
 */
export function calculateJobDuration(logs) {
   const jobs = {};
  const results = [];

  for (const log of logs) {
    if (log.status === "START") {
      jobs[log.pid] = {
        description: log.description,
        startTime: timeToSeconds(log.time),
      };
    } else if (log.status === "END") {
      if (jobs[log.pid]) {
        const startTime = jobs[log.pid].startTime;
        const endTime = timeToSeconds(log.time);
        const durationSec = endTime - startTime;

        results.push({
          pid: log.pid,
          description: jobs[log.pid].description,
          durationSec,
        });

        delete jobs[log.pid];
      }
    }
  }
  return results;
}   