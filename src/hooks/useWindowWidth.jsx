import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(() => {
    return window.innerWidth > 800 ? 1536 : 768;
  });
  const setWindowSize = (size) => setWidth(size);
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowSize(e.target.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", (e) => {
        setWindowSize(e.target.innerWidth);
      });
    };
  }, []);
  return width;
}
