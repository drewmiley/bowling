trait BowlingFrame

case class NotLastFrame(scores: List[Int]) extends BowlingFrame {
  def isStrike: Boolean = ???
  def isSpare: Boolean = ???

  def isComplete: Boolean = ???
}

case class LastFrame(scores: List[Int]) extends BowlingFrame {
  def isComplete: Boolean = ???
}

object Bowling {
  def cube(x: Int) =
    x * x * x

  def frames(individualScores: List[String]): List[BowlingFrame] = ???

  def scores(frames: List[BowlingFrame]): List[Option[Int]] = ???
}