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
        isComplete: isStrike || scores.length == 2
    }
};

const LastFrame = scores => {
    return {
        scores,
        isComplete: (scores.length == 2 && sum(scores) < 10) || scores.length == 3
    }
};

function frames(individualScores) {
    // individualScores.foldLeft(List.empty[BowlingFrame])((acc, d) => {
    //   val numericalValue: Int = getNumericalValueFromScoreAndLastFrame(acc.lastOption, d)
    //   (acc.lastOption, acc.length) match {
    //     case (Some(notLastFrame: NotLastFrame), 9) if notLastFrame.isComplete => acc :+ LastFrame(List(numericalValue))
    //     case (Some(notLastFrame: NotLastFrame), _) if notLastFrame.isComplete => acc :+ NotLastFrame(List(numericalValue))
    //     case (Some(notLastFrame: NotLastFrame), _) => acc.init ++ List(NotLastFrame(notLastFrame.scores :+ numericalValue))
    //     case (Some(lastFrame: LastFrame), 10) => acc.init ++ List(LastFrame(lastFrame.scores :+ numericalValue))
    //     case (None, 0) => List(NotLastFrame(List(numericalValue)))
    //   }
    // })
    return [
        NotLastFrame([6])
    ];
}

const Bowling = {
    frames
};

exports.NotLastFrame = NotLastFrame;
exports.LastFrame = LastFrame;
exports.Bowling = Bowling;