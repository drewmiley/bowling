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

const getScoreForCompleteNotLastFrame = (notLastFrame, subsequentFrames) => {
    const sumOfFrameScores = sum(notLastFrame.scores);
    const subsequentScores = subsequentFrames.flatMap(frame => frame.scores);
    if (notLastFrame.isStrike) {
        return subsequentScores.length >= 2 ? sumOfFrameScores + subsequentScores[0] + subsequentScores[1] : null;
    } else if (notLastFrame.isSpare) {
        return subsequentScores.length >= 1 ? sumOfFrameScores + subsequentScores[0] : null;
    } else {
        return sumOfFrameScores;
    }
}

const getScoresFromFrame = frames => (bowlingFrame, frameNumber) => {
    if (!bowlingFrame.isComplete) return null;
    if (!bowlingFrame.isNotLastFrame) return sum(bowlingFrame.scores)
    return getScoreForCompleteNotLastFrame(bowlingFrame, frames.slice(frameNumber + 1));
}

function scores(frames) {
    const curriedScoresFromFrame = getScoresFromFrame(frames)
    const individualFramesScores = frames.map((frame, index) => curriedScoresFromFrame(frame, index));
    return individualFramesScores.reduce((acc, d) => {
        if (acc.length == 0) {
            return [d];
        } else {
            const totalLastScore = acc[acc.length - 1];
            const nextScore = (totalLastScore && d) ? totalLastScore + d : null; 
            return acc.concat([nextScore]);
        }
    }, [])
}

const Bowling = {
    frames,
    scores
};

exports.NotLastFrame = NotLastFrame;
exports.LastFrame = LastFrame;
exports.Bowling = Bowling;