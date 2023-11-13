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

  // test("Bowling.frames 1 frame complete") {
  //   val frames = List("6", "2")
  //   val expected = List(
  //     NotLastFrame(List(6, 2))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 2 frames incomplete") {
  //   val frames = List("6", "2", "7")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 2 frames complete") {
  //   val frames = List("6", "2", "7", "2")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 3 frames incomplete") {
  //   val frames = List("6", "2", "7", "2", "3")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 3 frames complete") {
  //   val frames = List("6", "2", "7", "2", "3", "4")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 4 frames incomplete") {
  //   val frames = List("6", "2", "7", "2", "3", "4", "8")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4)),
  //     NotLastFrame(List(8))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 4 frames complete") {
  //   val frames = List("6", "2", "7", "2", "3", "4", "8", "/")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4)),
  //     NotLastFrame(List(8, 2))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 5 frames incomplete") {
  //   val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4)),
  //     NotLastFrame(List(8, 2)),
  //     NotLastFrame(List(9))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 5 frames complete") {
  //   val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4)),
  //     NotLastFrame(List(8, 2)),
  //     NotLastFrame(List(9, 0))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 6 frames complete") {
  //   val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4)),
  //     NotLastFrame(List(8, 2)),
  //     NotLastFrame(List(9, 0)),
  //     NotLastFrame(List(10))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 7 frames complete") {
  //   val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4)),
  //     NotLastFrame(List(8, 2)),
  //     NotLastFrame(List(9, 0)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 8 frames complete") {
  //   val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4)),
  //     NotLastFrame(List(8, 2)),
  //     NotLastFrame(List(9, 0)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 9 frames incomplete") {
  //   val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4)),
  //     NotLastFrame(List(8, 2)),
  //     NotLastFrame(List(9, 0)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(6))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 9 frames complete") {
  //   val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4)),
  //     NotLastFrame(List(8, 2)),
  //     NotLastFrame(List(9, 0)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(6, 3))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 10 frames incomplete 1") {
  //   val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3", "4")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4)),
  //     NotLastFrame(List(8, 2)),
  //     NotLastFrame(List(9, 0)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(6, 3)),
  //     LastFrame(List(4))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 10 frames incomplete 2") {
  //   val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3", "4", "/")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4)),
  //     NotLastFrame(List(8, 2)),
  //     NotLastFrame(List(9, 0)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(6, 3)),
  //     LastFrame(List(4, 6))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }
  // test("Bowling.frames 10 frames complete") {
  //   val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3", "4", "/", "10")
  //   val expected = List(
  //     NotLastFrame(List(6, 2)),
  //     NotLastFrame(List(7, 2)),
  //     NotLastFrame(List(3, 4)),
  //     NotLastFrame(List(8, 2)),
  //     NotLastFrame(List(9, 0)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(10)),
  //     NotLastFrame(List(6, 3)),
  //     LastFrame(List(4, 6, 10))
  //   )
  //   assert(Bowling.frames(frames) == expected)
  // }