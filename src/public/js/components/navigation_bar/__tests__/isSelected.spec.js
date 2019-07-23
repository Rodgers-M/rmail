import isSelected from '../isSelected';

describe('isSelected', () => {
  it('has a module', () => {
    expect(isSelected).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof isSelected).toBe('function');
  });
  it('should return true if provided path matches the provided pathname', () => {
    const selected = isSelected('/foo', '/foo');
    expect(selected).toBeTruthy();
  });
  it('should return false if provided path matches the provided pathname', () => {
    const selected = isSelected('/foo', '/notfoo');
    expect(selected).toBeFalsy();
  });
  it('should return true if provided path is /inbox and the provided pathname is /', () => {
    const selected = isSelected('/', '/inbox');
    expect(selected).toBeTruthy();
  });
});
