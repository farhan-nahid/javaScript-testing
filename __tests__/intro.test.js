import { describe, expect, it } from 'vitest';
import { calculateAverage, factorial, fizzBuzz, max } from '../src/intro';

// max function test
describe('max', () => {
  it('should return the first argument if it is greater than the second', () => {
    // Arrange
    const a = 10;
    const b = 5;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(a);
  });

  it('should return the second argument if it is greater than the first', () => {
    // All in one line
    expect(max(5, 10)).toBe(10);
  });

  it('should return the first argument if arguments are sa,me', () => {
    // All in one line
    expect(max(5, 5)).toBe(5);
  });
});

// fizzBuzz function test
describe('fizzBuzz', () => {
  // Fizz
  it('should return "Fizz" if argument is divided by 3 and remaining 0', () => {
    expect(fizzBuzz(6)).toBe('Fizz');
  });

  // Buzz
  it('should return "Buzz" if argument is divided by 5 and remaining 0', () => {
    expect(fizzBuzz(50)).toBe('Buzz');
  });

  // FizzBuzz
  it('should return "FizzBuzz" if argument is divided by 3 & 5 remaining 0', () => {
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  // return the argument
  it('should return the "Argument" if argument is divided by 3 or 5 remaining greater then 0', () => {
    expect(fizzBuzz(7)).toBe('7');
  });
});

// calculateAverage function test
describe('calculateAverage', () => {
  it('should return "NaN" if given an empty array', () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it('should calculate the average of an array with a single element', () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it('should calculate the average of an array with two elements', () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });

  it('should calculate the average of an array with three elements', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

// factorial function test
describe('factorial', () => {
  it('should return "undefined" if argument is "negative"', () => {
    expect(factorial(-1)).toBe(undefined);
  });

  it('should return "1" if argument is "1"', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return "1" if argument is "0"', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return "24" if argument is "4"', () => {
    expect(factorial(4)).toBe(24);
  });
});
