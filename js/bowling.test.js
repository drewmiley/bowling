const {add, NotLastFrame, Bowling} = require('./bowling')

test('string with a single number should result in the number itself', () => {
    expect(add('1')).toBe(1);
  });

test("Bowling.frames 1 frame incomplete", () => {
    const frames = ["6"];
    const expected = [
        NotLastFrame([6])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected);
});

test("Bowling.frames 1 frame complete", () => {
    const frames = ["6", "2"]
    const expected = [
      NotLastFrame([6, 2])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});
  // test("Bowling.frames 2 frames incomplete", () => {
  //   const frames = ["6", "2", "7")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 2 frames complete", () => {
  //   const frames = ["6", "2", "7", "2")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 3 frames incomplete", () => {
  //   const frames = ["6", "2", "7", "2", "3")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 3 frames complete", () => {
  //   const frames = ["6", "2", "7", "2", "3", "4")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 4 frames incomplete", () => {
  //   const frames = ["6", "2", "7", "2", "3", "4", "8")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4]),
  //     NotLastFrame([8))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 4 frames complete", () => {
  //   const frames = ["6", "2", "7", "2", "3", "4", "8", "/")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4]),
  //     NotLastFrame([8, 2))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 5 frames incomplete", () => {
  //   const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4]),
  //     NotLastFrame([8, 2]),
  //     NotLastFrame([9))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 5 frames complete", () => {
  //   const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4]),
  //     NotLastFrame([8, 2]),
  //     NotLastFrame([9, 0))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 6 frames complete", () => {
  //   const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4]),
  //     NotLastFrame([8, 2]),
  //     NotLastFrame([9, 0]),
  //     NotLastFrame([10))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 7 frames complete", () => {
  //   const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4]),
  //     NotLastFrame([8, 2]),
  //     NotLastFrame([9, 0]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 8 frames complete", () => {
  //   const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4]),
  //     NotLastFrame([8, 2]),
  //     NotLastFrame([9, 0]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 9 frames incomplete", () => {
  //   const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4]),
  //     NotLastFrame([8, 2]),
  //     NotLastFrame([9, 0]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10]),
  //     NotLastFrame([6))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 9 frames complete", () => {
  //   const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4]),
  //     NotLastFrame([8, 2]),
  //     NotLastFrame([9, 0]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10]),
  //     NotLastFrame([6, 3))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 10 frames incomplete 1") {
  //   const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3", "4")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4]),
  //     NotLastFrame([8, 2]),
  //     NotLastFrame([9, 0]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10]),
  //     NotLastFrame([6, 3]),
  //     LastFrame([4))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 10 frames incomplete 2") {
  //   const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3", "4", "/")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4]),
  //     NotLastFrame([8, 2]),
  //     NotLastFrame([9, 0]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10]),
  //     NotLastFrame([6, 3]),
  //     LastFrame([4, 6))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }
  // test("Bowling.frames 10 frames complete", () => {
  //   const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3", "4", "/", "10")
  //   const expected = [
  //     NotLastFrame([6, 2]),
  //     NotLastFrame([7, 2]),
  //     NotLastFrame([3, 4]),
  //     NotLastFrame([8, 2]),
  //     NotLastFrame([9, 0]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10]),
  //     NotLastFrame([10]),
  //     NotLastFrame([6, 3]),
  //     LastFrame([4, 6, 10))
  //   )
  //   expect(Bowling.frames(frames)).toStrictEqual(expected)
  // }