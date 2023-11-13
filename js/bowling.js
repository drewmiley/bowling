const sum = numbers => numbers.reduce((acc, d) => acc + d, 0);

const getNumericalValueFromScoreAndLastFrame = (lastFrame, score) => {
    if (score == "X") return 10;
    if (score == "/") return 10 - lastFrame.scores[lastFrame.scores.length - 1];
    return parseInt(score, 10);
}

const NotLastFrame = scores => {
    const isStrike = scores.length == 1 && scores[0] == 10
    return {
        scores,
        isStrike,
        isSpare: scores.length == 2 && sum(scores) == 10,
        isComplete: isStrike || scores.length == 2,
        isNotLastFrame: true
    }
};

const LastFrame = scores => {
    return {
        scores,
        isComplete: (scores.length == 2 && sum(scores) < 10) || scores.length == 3,
        isNotLastFrame: false
    }
};

function frames(individualScores) {
    return individualScores.reduce((acc, d) => {
        const accLength = acc.length;
        const lastFrameInAcc = acc.length ? acc[acc.length - 1] : null;
        const numericalValue = getNumericalValueFromScoreAndLastFrame(lastFrameInAcc, d);
        if (!lastFrameInAcc) return [NotLastFrame([numericalValue])];
        if (lastFrameInAcc.isComplete) {
            const newFrame = accLength == 9 ? LastFrame([numericalValue]) : NotLastFrame([numericalValue]);
            return acc.concat([newFrame]);
        } else {
            const newScores = lastFrameInAcc.scores.concat([numericalValue]);
            const newFrame = lastFrameInAcc.isNotLastFrame ? NotLastFrame(newScores) : LastFrame(newScores);
            return acc.slice(0, -1).concat([newFrame]);
        }

    }, []);
}

function scores(frames) {
    return [];
}

  // private def getScoreForCompleteNotLastFrame(notLastFrame: NotLastFrame, subsequentFrames: List[BowlingFrame]): Option[Int] = {
  //   val sumOfFrameScores = notLastFrame.scores.sum
  //   (notLastFrame.isStrike, notLastFrame.isSpare, subsequentFrames.flatMap(frame => frame.scores)) match {
  //     case (false, false, _) => Option(sumOfFrameScores)
  //     case (true, false, scores) if scores.length >= 2 => Option(sumOfFrameScores + scores.take(2).sum)
  //     case (true, false, scores) if scores.length < 2 => None
  //     case (false, true, scores) if scores.nonEmpty => Option(sumOfFrameScores + scores.take(1).sum)
  //     case (false, true, scores) if scores.isEmpty => None
  //   }
  // }

  // private def getScoresFromFrame: List[BowlingFrame] => (BowlingFrame, Int) => Option[Int] = {
  //   frames => (bowlingFrame, frameNumber) => {
  //     (bowlingFrame, bowlingFrame.isComplete) match {
  //       case (_, false) => None
  //       case (_: LastFrame, true) => Option(bowlingFrame.scores.sum)
  //       case (notLastFrame: NotLastFrame, true) => getScoreForCompleteNotLastFrame(notLastFrame, subsequentFrames = frames.drop(frameNumber + 1))
  //     }
  //   }
  // }

  // def scores(frames: List[BowlingFrame]): List[Option[Int]] = {
  //   val curriedScoresFromFrame: (BowlingFrame, Int) => Option[Int] = getScoresFromFrame(frames)
  //   val individualFrameScores: List[Option[Int]] = frames.zipWithIndex.map(d => curriedScoresFromFrame(d._1, d._2))
  //   individualFrameScores.foldLeft(List.empty[Option[Int]])((acc, d) => {
  //     if (acc.isEmpty) List(d) else {
  //       val lastFrameScore = for {
  //         totalLastScore <- acc.last
  //         individualFrameScore <- d
  //       } yield totalLastScore + individualFrameScore
  //       acc :+ lastFrameScore
  //     }
  //   })
  // }

const Bowling = {
    frames,
    scores
};

exports.NotLastFrame = NotLastFrame;
exports.LastFrame = LastFrame;
exports.Bowling = Bowling;