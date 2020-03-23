import * as React from "react";

const UseInput = props => {
  const [scroll, setScroll] = React.useState(0);
  const [clicks, setClicks] = React.useState(0);

  const scrollHandler = e => {
    if (e.deltaY < 0) {
      setScroll(scroll + 1);
    } else {
      setScroll(scroll - 1);
    }
  };

  const clickHandler = e => {
    setClicks(clicks + 1);
  }

  React.useEffect(() => {
    window.addEventListener("click", clickHandler);
    window.addEventListener("wheel", scrollHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
      window.removeEventListener("wheel", scrollHandler);
    };
  });

  return [scroll, clicks];
}

export default UseInput;
