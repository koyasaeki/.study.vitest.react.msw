import { describe, expect, it } from "vitest";

const fetchHelloWorld = () => {
  return fetch('https://example.com');
}

describe('HelloWorld', () => {
  it('should return "Hello World"', async () => {
    const response = await fetchHelloWorld();
    const json = await response.json();
    expect(json.message).toBe("Hello World");
  });
});
