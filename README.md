# LSEG Log Monitoring

## Description

LSEG Log Monitoring is a application that reads a CSV log file, parses job events, calculates job durations, and generates a report with warnings or errors if job durations exceed defined thresholds.

## Features

- Parse the CSV log file.
- Identify each job or task and track its start and finish times.
- Calculate the duration of each job from the time it started to the time it finished.
- Produce a report or output that:
  - **OK:** ≤ 5 minutes
  - **WARNING:** > 5 minutes and ≤ 10 minutes
  - **ERROR:** > 10 minutes

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lseg-rahul/lseg-log-monitoring.git
   cd lseg-log-monitoring
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Place your log file as `logs.log` in the project root.  
   Each line should be in the format:

   ```
   HH:MM:SS,Job Description,START|END,PID
   ```

   Example:

   ```
   12:00:01,Job A,START,123
   12:05:01,Job A,END,123
   ```

2. Run the application:

   ```bash
   npm start
   ```

   The output will display job status messages in the console.

## Testing

Run all unit tests using Jest:

```bash
npm test
```

Test files are located in `src/tests/` and cover parsing, duration calculation, and reporting.

## Implementation Details

- **Log Parsing:**  
  [`parseLogFile`](src/services/parseLogFile.js) reads and parses the log file into objects.

- **Job Duration Calculation:**  
  [`calculateJobDuration`](src/services/calculateJobDuration.js) computes job durations using start and end times.

- **Reporting:**  
  [`generateReport`](src/services/reportGenerator.js) prints OK, WARNING, or ERROR based on thresholds.

## Example Output

```
OK: Job "Job A" (PID: 123) took 5 minutes
WARNING: Job "Job B" (PID: 456) took 7 minutes
ERROR: Job "Job C" (PID: 789) took 12 minutes
```

## Author

Rahul Umrao
# lseg-log-monitoring
