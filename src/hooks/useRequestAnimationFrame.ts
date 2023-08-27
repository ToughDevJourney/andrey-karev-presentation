import { useCallback, useEffect, useRef } from "react";

const useRequestAnimationFrame = () => {
  const requestAnimationFrameIdRef = useRef(0);

  const animate = useCallback((animationHandler) => {
    animationHandler();

    requestAnimationFrameIdRef.current = requestAnimationFrame(() => animate(animationHandler));
  }, []);

  const stopAnimation = () => {
    cancelAnimationFrame(requestAnimationFrameIdRef.current);
  };

  useEffect(() => {
    return stopAnimation;
  }, [animate]);

  return { animate, stopAnimation };
};

export default useRequestAnimationFrame;
