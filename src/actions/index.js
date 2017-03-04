export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';

export function example(example) {
  return {
    type: EXAMPLE_ACTION,
    example
  };
}
