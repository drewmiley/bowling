function add(numbers) {
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a + b)
}

function NotLastFrame(scores) {
    return {
        scores
    }
}

function frames(individualScores) {
    return [];
}

const Bowling = {
    frames
};

exports.add = add;
exports.NotLastFrame = NotLastFrame;
exports.Bowling = Bowling;