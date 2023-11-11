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
  def frames(individualScores: List[String]): List[BowlingFrame] = ???

  def scores(frames: List[BowlingFrame]): List[Option[Int]] = ???
}