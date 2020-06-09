import memoize from "fast-memoize";

const baseWave = "-.,_,.-'``";

const leftShift = (str, n) =>
  str.substring(n) + str.substring(0, n);

const getWave = (offset, fontSize) => {
  const waveW = (fontSize / 1.82) * 11;
  const reps = Math.ceil(document.documentElement.clientWidth) / waveW;

  const rowH = fontSize / (64/95);
  const rows = Math.ceil(document.documentElement.clientHeight / rowH);

  const wave = leftShift(baseWave, offset % 11).repeat(reps);

  return [
    wave,
    wave.split("").reverse().join(""),
    rows
  ];
};

export const getWaveMemoized = memoize(getWave);
