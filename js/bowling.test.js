const {add, NotLastFrame, Bowling} = require('./bowling')

test('string with a single number should result in the number itself', () => {
    expect(add('1')).toBe(1);
  });

test("Bowling.frames 1 frame incomplete", () => {
    const frames = ["6"];
    const expected = [
        NotLastFrame([6])
    ];
    expect(Bowling.frames(frames)).toBe(expected);
});