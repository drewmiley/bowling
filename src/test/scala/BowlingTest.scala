import org.scalatest.funsuite.AnyFunSuite

class BowlingTest extends AnyFunSuite {
  test("Bowling.frames 1 frame incomplete") {
    val frames = List("6")
    val expected = List(
      NotLastFrame(List(6))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 1 frame complete") {
    val frames = List("6", "2")
    val expected = List(
      NotLastFrame(List(6, 2))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 2 frames incomplete") {
    val frames = List("6", "2", "7")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 2 frames complete") {
    val frames = List("6", "2", "7", "2")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 3 frames incomplete") {
    val frames = List("6", "2", "7", "2", "3")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 3 frames complete") {
    val frames = List("6", "2", "7", "2", "3", "4")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 4 frames incomplete") {
    val frames = List("6", "2", "7", "2", "3", "4", "8")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 4 frames complete") {
    val frames = List("6", "2", "7", "2", "3", "4", "8", "/")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 5 frames incomplete") {
    val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 5 frames complete") {
    val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 6 frames complete") {
    val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 7 frames complete") {
    val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 8 frames complete") {
    val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 9 frames incomplete") {
    val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(6))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 9 frames complete") {
    val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(6, 3))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 10 frames incomplete 1") {
    val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3", "4")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(6, 3)),
      NotLastFrame(List(4))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 10 frames incomplete 2") {
    val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3", "4", "/")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(6, 3)),
      NotLastFrame(List(4, 6))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.frames 10 frames complete") {
    val frames = List("6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3", "4", "/", "10")
    val expected = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(6, 3)),
      NotLastFrame(List(4, 6, 10))
    )
    assert(Bowling.frames(frames) == expected)
  }
  test("Bowling.scores 1 frame incomplete") {
    val scores = List(
      NotLastFrame(List(6))
    )
    val expected = List(
      None
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 1 frame complete") {
    val scores = List(
      NotLastFrame(List(6, 2))
    )
    val expected = List(
      Some(8)
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 2 scores incomplete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7))
    )
    val expected = List(
      Some(8),
      None
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 2 scores complete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2))
    )
    val expected = List(
      Some(8),
      Some(17)
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 3 scores incomplete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3))
    )
    val expected = List(
      Some(8),
      Some(17),
      None
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 3 scores complete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24)
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 4 scores incomplete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24),
      None
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 4 scores complete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24),
      None
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 5 scores incomplete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24),
      Some(43),
      None
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 5 scores complete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24),
      Some(43),
      Some(52)
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 6 scores complete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24),
      Some(43),
      Some(52),
      None
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 7 scores complete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24),
      Some(43),
      Some(52),
      None,
      None
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 8 scores complete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24),
      Some(43),
      Some(52),
      Some(82),
      None,
      None
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 9 scores incomplete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(6))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24),
      Some(43),
      Some(52),
      Some(82),
      Some(108),
      None,
      None
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 9 scores complete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(6, 3))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24),
      Some(43),
      Some(52),
      Some(82),
      Some(108),
      Some(127),
      Some(136)
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 10 scores incomplete 1") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(6, 3)),
      NotLastFrame(List(4))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24),
      Some(43),
      Some(52),
      Some(82),
      Some(108),
      Some(127),
      Some(136),
      None
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 10 scores incomplete 2") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(6, 3)),
      NotLastFrame(List(4, 6))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24),
      Some(43),
      Some(52),
      Some(82),
      Some(108),
      Some(127),
      Some(136),
      None
    )
    assert(Bowling.scores(scores) == expected)
  }
  test("Bowling.scores 10 scores complete") {
    val scores = List(
      NotLastFrame(List(6, 2)),
      NotLastFrame(List(7, 2)),
      NotLastFrame(List(3, 4)),
      NotLastFrame(List(8, 2)),
      NotLastFrame(List(9, 0)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(10)),
      NotLastFrame(List(6, 3)),
      NotLastFrame(List(4, 6, 10))
    )
    val expected = List(
      Some(8),
      Some(17),
      Some(24),
      Some(43),
      Some(52),
      Some(82),
      Some(108),
      Some(127),
      Some(136),
      Some(156)
    )
    assert(Bowling.scores(scores) == expected)
  }
}