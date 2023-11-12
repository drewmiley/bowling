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

  private def getScoreForCompleteNotLastFrame(notLastFrame: NotLastFrame, frameNumber: Int, frames: List[BowlingFrame]): Option[Int] = {
    val sumOfFrameScores = notLastFrame.scores.sum
    (notLastFrame.isStrike, notLastFrame.isSpare) match {
      case (false, false) => Option(sumOfFrameScores)
//      TODO: IMPLEMENT BELOW
      case (true, false) => None
      case (false, true) => None
    }
  }

  private def getScoresFromFrame: List[BowlingFrame] => (BowlingFrame, Int) => Option[Int] = {
    frames => (bowlingFrame, frameNumber) => {
      (bowlingFrame, bowlingFrame.isComplete) match {
        case (_, false) => None
        case (_: LastFrame, true) => Option(bowlingFrame.scores.sum)
        case (notLastFrame: NotLastFrame, true) => getScoreForCompleteNotLastFrame(notLastFrame, frameNumber, frames)
      }
    }
  }

  def scores(frames: List[BowlingFrame]): List[Option[Int]] = {
    val curriedScoresFromFrame: (BowlingFrame, Int) => Option[Int] = getScoresFromFrame(frames)
    val individualFrameScores: List[Option[Int]] = frames.zipWithIndex.map(d => curriedScoresFromFrame(d._1, d._2))
//    Can below use reduceLeft?
    individualFrameScores.foldLeft(List.empty[Option[Int]])((acc, d) => {
      if (acc.isEmpty) List(d) else {
        val lastFrameScore = for {
          totalLastScore <- acc.last
          individualFrameScore <- d
        } yield totalLastScore + individualFrameScore
        acc :+ lastFrameScore
      }
    })
  }
}