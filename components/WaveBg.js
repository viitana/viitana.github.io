import * as React from "react";
import UseInput from "./Input";
import { getWaveMemoized } from "./util";

const WaveBg = props => {
  const [T, setT] = React.useState(0);

  const fontOffset = UseInput();
  const fontSize = 38 + fontOffset;

  const bgstyle = {
    width:"100%",
    height:"100%",
    position:"absolute",
    zIndex: -1,
  };

  const spanstyle= {
    display: "inline-block",
    whiteSpace: "pre",
    fontSize: fontSize,
    fontFamily: "Lucida Console, Monaco, monospace",
    userSelect: "none",
    color: "#d9d9d9"
  };

  const [wave, waveReverse, rows] = getWaveMemoized(T, fontSize);

  React.useEffect(() => {
    setTimeout(() => {
      setT(T + 1);
    }, 100);
  }, [T]);

  return (
    <div id="bg" style={bgstyle}>
      {[...Array(rows).keys()].map((idx) => (
        <span key={idx} style={spanstyle}>
          {idx % 2
            ? wave
            : waveReverse}
        </span>
      ))}
    </div>
  );
};

export default WaveBg;
