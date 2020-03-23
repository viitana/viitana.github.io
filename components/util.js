import memoize from "fast-memoize"

const waves = [
  "'-.,_,.-'``",
  "`”°º××º°”˜˜",
  "°·.¸¸¸.·°¯¯",
  "*•.¸¸¸.•*¨¨",
  "°•º¤◆◆¤º°¯¯",
]

const leftShift = (str, n) =>
  str.substring(n) + str.substring(0, n)

const getWave = (idx, offset, fontSize) => {
  const waveW = (fontSize / 1.82) * 11;
  const reps = Math.ceil(document.documentElement.clientWidth) / waveW;

  const rowH = fontSize / (64/95)
  const rows = Math.ceil(document.documentElement.clientHeight / rowH);

  const wave = leftShift(waves[idx % waves.length], offset % 11).repeat(reps)

  return [
    wave,
    wave.split("").reverse().join(""),
    rows
  ];
}

export const getWaveMemoized = memoize(getWave);
