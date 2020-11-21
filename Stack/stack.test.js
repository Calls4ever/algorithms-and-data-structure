const Stack=require('./stacks')

test('Stack should be a class', () => {
    let s=new Stack
    expect(typeof(s)).toBe('object');
  });