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

3. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the report.

## Project Structure

- `src/index.js` - Main entry point, starts the Express server and print the report.
- `src/services/parseLogFile.js` - Parses the CSV log file.
- `src/services/calculateJobDuration.js` - Calculates job durations.
- `src/services/reportGenerator.js` - Generates the report.

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
OK: Job "scheduled task 032" (PID: 37980) took 0.55 minutes
WARNING: Job "scheduled task 074" (PID: 71766) took 5.78 minutes
ERROR: Job "scheduled task 515" (PID: 45135) took 12.38 minutes
```

## Author

Rahul Umrao
