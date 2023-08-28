import { useCallback, useEffect, useRef } from "react";

const useRequestAnimationFrame = () => {
  const requestAnimationFrameIdRef = useRef(0);

  const animate = useCallback((animationHandler) => {
    animationHandler();

    requestAnimationFrameIdRef.current = requestAnimationFrame(() => animate(animationHandler));
  }, []);

  const stopAnimation = useCallback(() => {
    cancelAnimationFrame(requestAnimationFrameIdRef.current);
  }, []);

  useEffect(() => {
    return stopAnimation;
  }, [stopAnimation]);

  return { animate, stopAnimation };
};

export default useRequestAnimationFrame;
