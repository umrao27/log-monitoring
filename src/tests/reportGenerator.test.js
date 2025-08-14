
import { jest } from '@jest/globals';
import { generateReport } from '../services/reportGenerator';

describe('generateReport', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('logs OK for jobs below warning threshold', () => {
    const jobs = [{ description: 'Job1', pid: 1, durationSec: 200}];
    generateReport(jobs);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('OK: Job "Job1"'));
  });

  it('logs WARNING for jobs above warning but below error threshold', () => {
    const jobs = [{ description: 'Job2', pid: 2, durationSec: 400}];
    generateReport(jobs);
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('WARNING: Job "Job2"'));
  });

  it('logs ERROR for jobs above error threshold', () => {
    const jobs = [{ description: 'Job3', pid: 3, durationSec: 700}];
    generateReport(jobs);
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining('ERROR: Job "Job3"'));
  });
});