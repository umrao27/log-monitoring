import { calculateJobDuration } from "../services/calculateJobDuration";

test("calculateJobDuration calculates correct durations", () => {
  const sampleLogs = [
    { time: "12:00:00", description: "Job A", status: "START", pid: "123" },
    { time: "12:05:00", description: "Job A", status: "END", pid: "123" },
  ];

  const results = calculateJobDuration(sampleLogs);
  expect(results[0].durationSec).toBe(300);
});
