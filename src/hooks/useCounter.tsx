import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const useCounter = (cb: Function, delay: number = 1000, initIsActive = true) => {
  const saveCbRef: any = useRef();
  const [isActive, setIsActive] = useState(initIsActive);

  useEffect(() => {
    saveCbRef.current = cb;
  }, [cb])

  useEffect(() => {
    let t: any = null;
    if (isActive) {
      const tick = () => saveCbRef.current();
      t = setInterval(tick, delay);
    } else {
      clearInterval(t);
    }
    return () => clearInterval(t);
  }, [delay, isActive]);

  return {
    setIsActive
  }
}

export default useCounter;