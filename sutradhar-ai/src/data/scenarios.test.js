import { describe, it, expect } from 'vitest';
import { scenarios } from './scenarios';

describe('Scenarios Data', () => {
  it('should have 3 scenarios', () => {
    expect(scenarios).toHaveLength(3);
  });

  it('should have valid structure for each scenario', () => {
    scenarios.forEach(scenario => {
      expect(scenario).toHaveProperty('id');
      expect(scenario).toHaveProperty('title');
      expect(scenario).toHaveProperty('originalText');
      expect(scenario).toHaveProperty('transcreatedText');
      expect(scenario).toHaveProperty('adaptations');
      expect(Array.isArray(scenario.adaptations)).toBe(true);
    });
  });

  it('should have required categories', () => {
    const categories = scenarios.map(s => s.category);
    expect(categories).toContain('Sports');
    expect(categories).toContain('Finance');
    expect(categories).toContain('Pop Culture');
  });
});
