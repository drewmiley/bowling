const {NotLastFrame, LastFrame, Bowling} = require('./bowling')

test("Bowling.frames 1 frame incomplete", () => {
    const frames = ["6"];;
    const expected = [
        NotLastFrame([6])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected);
});

test("Bowling.frames 1 frame complete", () => {
    const frames = ["6", "2"];
    const expected = [
        NotLastFrame([6, 2])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 2 frames incomplete", () => {
    const frames = ["6", "2", "7"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 2 frames complete", () => {
    const frames = ["6", "2", "7", "2"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 3 frames incomplete", () => {
    const frames = ["6", "2", "7", "2", "3"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 3 frames complete", () => {
    const frames = ["6", "2", "7", "2", "3", "4"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 4 frames incomplete", () => {
    const frames = ["6", "2", "7", "2", "3", "4", "8"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 4 frames complete", () => {
    const frames = ["6", "2", "7", "2", "3", "4", "8", "/"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 5 frames incomplete", () => {
    const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 5 frames complete", () => {
    const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 6 frames complete", () => {
    const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 7 frames complete", () => {
    const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 8 frames complete", () => {
    const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([10])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 9 frames incomplete", () => {
    const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([6])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 9 frames complete", () => {
    const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([6, 3])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 10 frames incomplete 1", () => {
    const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3", "4"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([6, 3]),
        LastFrame([4])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 10 frames incomplete 2", () => {
    const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3", "4", "/"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([6, 3]),
        LastFrame([4, 6])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.frames 10 frames complete", () => {
    const frames = ["6", "2", "7", "2", "3", "4", "8", "/", "9", "0", "X", "X", "X", "6", "3", "4", "/", "10"];
    const expected = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([6, 3]),
        LastFrame([4, 6, 10])
    ];
    expect(Bowling.frames(frames)).toStrictEqual(expected)
});

test("Bowling.scores 1 frame incomplete", () => {
    const scores = [
        NotLastFrame([6])
    ];
    const expected = [
        null
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 1 frame complete", () => {
    const scores = [
        NotLastFrame([6, 2])
    ];
    const expected = [
        8
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 2 scores incomplete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7])
    ];
    const expected = [
        8,
        null
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 2 scores complete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2])
    ];
    const expected = [
        8,
        17
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 3 scores incomplete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3])
    ];
    const expected = [
        8,
        17,
        null
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 3 scores complete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4])
    ];
    const expected = [
        8,
        17,
        24
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 4 scores incomplete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8])
    ];
    const expected = [
        8,
        17,
        24,
        null
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 4 scores complete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2])
    ];
    const expected = [
        8,
        17,
        24,
        null
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 5 scores incomplete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9])
    ];
    const expected = [
        8,
        17,
        24,
        43,
        null
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 5 scores complete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0])
    ];
    const expected = [
        8,
        17,
        24,
        43,
        52
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 6 scores complete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10])
    ];
    const expected = [
        8,
        17,
        24,
        43,
        52,
        null
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 7 scores complete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10])
    ];
    const expected = [
        8,
        17,
        24,
        43,
        52,
        null,
        null
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 8 scores complete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([10])
    ];
    const expected = [
        8,
        17,
        24,
        43,
        52,
        82,
        null,
        null
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 9 scores incomplete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([6])
    ];
    const expected = [
        8,
        17,
        24,
        43,
        52,
        82,
        108,
        null,
        null
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 9 scores complete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([6, 3])
    ];
    const expected = [
        8,
        17,
        24,
        43,
        52,
        82,
        108,
        127,
        136
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 10 scores incomplete 1", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([6, 3]),
        LastFrame([4])
    ];
    const expected = [
        8,
        17,
        24,
        43,
        52,
        82,
        108,
        127,
        136,
        null
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 10 scores incomplete 2", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([6, 3]),
        LastFrame([4, 6])
    ];
    const expected = [
        8,
        17,
        24,
        43,
        52,
        82,
        108,
        127,
        136,
        null
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});

test("Bowling.scores 10 scores complete", () => {
    const scores = [
        NotLastFrame([6, 2]),
        NotLastFrame([7, 2]),
        NotLastFrame([3, 4]),
        NotLastFrame([8, 2]),
        NotLastFrame([9, 0]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([10]),
        NotLastFrame([6, 3]),
        LastFrame([4, 6, 10])
    ];
    const expected = [
        8,
        17,
        24,
        43,
        52,
        82,
        108,
        127,
        136,
        156
    ];
    expect(Bowling.scores(scores)).toStrictEqual(expected)
});
