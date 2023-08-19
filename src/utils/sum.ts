export function add(a: number, b: number): number {
  return a + b;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("1 足す 2 は 3 である。", () => {
    expect(add(1, 2)).toBe(3);
  });
}
