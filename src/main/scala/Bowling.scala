trait BowlingFrame

case class NotLastFrame(scores: List[Int]) extends BowlingFrame {
  def isStrike: Boolean = scores.length == 1 && scores.head == 10
  def isSpare: Boolean = scores.length == 2 && scores.sum == 10

  def isComplete: Boolean = isStrike || scores.length == 2
}

case class LastFrame(scores: List[Int]) extends BowlingFrame {
  def isComplete: Boolean = (scores.length == 2 && scores.sum < 10) || scores.length == 3
}

object Bowling {
  def frames(individualScores: List[String]): List[BowlingFrame] = {
    individualScores.foldLeft(List.empty[BowlingFrame])((acc, d) => {
      acc
    })
  }

  def scores(frames: List[BowlingFrame]): List[Option[Int]] = {
    frames.foldLeft(List.empty[Option[Int]])((acc, d) => {
      acc
    })
  }
}