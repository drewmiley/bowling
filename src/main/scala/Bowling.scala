trait BowlingFrame {
  def scores: List[Int]
  def isComplete: Boolean
}

case class NotLastFrame(scores: List[Int]) extends BowlingFrame {
  def isStrike: Boolean = scores.length == 1 && scores.head == 10
  def isSpare: Boolean = scores.length == 2 && scores.sum == 10

  def isComplete: Boolean = isStrike || scores.length == 2
}

case class LastFrame(scores: List[Int]) extends BowlingFrame {
  def isComplete: Boolean = (scores.length == 2 && scores.sum < 10) || scores.length == 3
}

object Bowling {

  private def getNumericalValueFromScoreAndLastFrame(lastOptionFrame: Option[BowlingFrame], score: String): Int = {
    (lastOptionFrame, score) match {
      case (_, "X") => 10
      case (Some(frame), "/") => 10 - frame.scores.last
      case (_, intValue) => intValue.toInt
    }
  }

  def frames(individualScores: List[String]): List[BowlingFrame] = {
    individualScores.foldLeft(List.empty[BowlingFrame])((acc, d) => {
      val numericalValue: Int = getNumericalValueFromScoreAndLastFrame(acc.lastOption, d)
      (acc.lastOption, acc.length) match {
        case (Some(notLastFrame: NotLastFrame), accLength) =>
          if (notLastFrame.isComplete) {
            val newFrame = if (accLength == 9) LastFrame(List(numericalValue)) else NotLastFrame(List(numericalValue))
            acc :+ newFrame
          } else {
            acc.init ++ List(NotLastFrame(notLastFrame.scores :+ numericalValue))
          }
        case (Some(lastFrame: LastFrame), 10) => acc.init ++ List(LastFrame(lastFrame.scores :+ numericalValue))
        case (None, 0) => List(NotLastFrame(List(numericalValue)))
      }
    })
  }

  def scores(frames: List[BowlingFrame]): List[Option[Int]] = {
    frames.foldLeft(List.empty[Option[Int]])((acc, d) => {
      acc
    })
  }
}