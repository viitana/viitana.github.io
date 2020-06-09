import * as React from "react";

const UseInput = props => {
  const [scroll, setScroll] = React.useState(0);

  const scrollHandler = e => {
    if (e.deltaY < 0) {
      setScroll(scroll + 1);
    } else {
      setScroll(scroll - 1);
    }
  };

  React.useEffect(() => {
    window.addEventListener("wheel", scrollHandler);
    return () => {
      window.removeEventListener("wheel", scrollHandler);
    };
  });

  return scroll;
};

export default UseInput;
