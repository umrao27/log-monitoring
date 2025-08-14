import { timeToSeconds } from '../utils/timeUtils';

describe('timeToSeconds', () => {
  it('converts HH:MM:SS to seconds', () => {
    expect(timeToSeconds('01:00:00')).toBe(3600);
    expect(timeToSeconds('00:01:00')).toBe(60);
    expect(timeToSeconds('00:00:30')).toBe(30);
    expect(timeToSeconds('02:30:15')).toBe(9015);
    expect(timeToSeconds('00:00:00')).toBe(0);
  });

  it('handles single digit values', () => {
    expect(timeToSeconds('1:2:3')).toBe(3723);
  });
});