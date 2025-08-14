import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseLogFile } from '../services/parseLogFile';

describe('parseLogFile', () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
  const testLogPath = path.join(__dirname, 'test.log');
  const logContent = [
    '12:00:01,Job A,START,123',
    '12:05:01,Job A,END,123',
    '12:10:00,Job B,START,456',
    '12:15:00,Job B,END,456'
  ].join('\n');

  beforeAll(() => {

    /*  this is creating (or overwriting) the file at testLogPath (which is test.log) 
        and writing the contents of logContent to it.
    */
    fs.writeFileSync(testLogPath, logContent);
  });

  afterAll(() => {

    /*  this is deleting the file at testLogPath (which is test.log) 
        after all tests are done and cleans up the test file
    */
    fs.unlinkSync(testLogPath);
  });

  it('parses log file into objects', () => {
    const result = parseLogFile(testLogPath);
    expect(result).toEqual([
      { time: '12:00:01', description: 'Job A', status: 'START', pid: '123' },
      { time: '12:05:01', description: 'Job A', status: 'END', pid: '123' },
      { time: '12:10:00', description: 'Job B', status: 'START', pid: '456' },
      { time: '12:15:00', description: 'Job B', status: 'END', pid: '456' }
    ]);
  });
});
