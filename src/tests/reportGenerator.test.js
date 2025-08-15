
import { generateReport } from '../services/reportGenerator';

describe('generateReport', () => {
  it('returns OK for jobs below warning threshold', () => {
    const jobs = [{ description: 'Job1', pid: 1, durationSec: 200 }];
    const report = generateReport(jobs);
    expect(report).toContain('<b>OK</b>: Job "Job1" (PID: 1) took 3.33 minutes');
  });

  it('returns WARNING for jobs above warning but below error threshold', () => {
    const jobs = [{ description: 'Job2', pid: 2, durationSec: 400 }];
    const report = generateReport(jobs);
    expect(report).toContain('<b>WARNING</b>: Job "Job2" (PID: 2) took 6.67 minutes');
  });

  it('returns ERROR for jobs above error threshold', () => {
    const jobs = [{ description: 'Job3', pid: 3, durationSec: 700 }];
    const report = generateReport(jobs);
    expect(report).toContain('<b>ERROR</b>: Job "Job3" (PID: 3) took 11.67 minutes');
  });
});