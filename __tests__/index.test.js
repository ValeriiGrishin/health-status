import healthStatus from '../src/index.js';

describe('healthStatus function', () => {
  test('should return "healthy" for health > 50', () => {
    expect(healthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(healthStatus({ name: 'Воин', health: 51 })).toBe('healthy');
  });

  test('should return "wounded" for health from 15 to 50', () => {
    expect(healthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(healthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
    expect(healthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
  });

  test('should return "critical" for health < 15', () => {
    expect(healthStatus({ name: 'Маг', health: 14 })).toBe('critical');
    expect(healthStatus({ name: 'Маг', health: 0 })).toBe('critical');
    expect(healthStatus({ name: 'Маг', health: -10 })).toBe('critical');
  });

  test('should throw error for invalid input', () => {
    expect(() => healthStatus(null)).toThrow('Invalid character object');
    expect(() => healthStatus(undefined)).toThrow('Invalid character object');
    expect(() => healthStatus({})).toThrow('Invalid character object');
    expect(() => healthStatus({ name: 'Маг' })).toThrow('Invalid character object');
    expect(() => healthStatus({ name: 'Маг', health: '90' })).toThrow('Invalid character object');
  });
});