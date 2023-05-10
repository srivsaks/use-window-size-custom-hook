import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", (e) => {
      handleResize();
    });
    return () => {
      window.removeEventListener("resize", () => handleResize());
    };
  }, []);
  return [width, height];
};
export default useWindowSize;
