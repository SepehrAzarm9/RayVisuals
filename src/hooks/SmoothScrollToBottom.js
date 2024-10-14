import { useCallback } from "react";

const useSmoothScrollToBottom = (duration = 1000) => {
  const smoothScrollToBottom = useCallback(
    (targetRef) => {
      if (!targetRef?.current) return;

      const targetPosition =
        targetRef.current.getBoundingClientRect().bottom + window.scrollY;
      const viewportHeight = window.innerHeight;

      // Calculate the scroll position to align the bottom of the target element with the bottom of the viewport
      const bottomOffset = targetPosition - viewportHeight;

      const startPosition = window.scrollY;
      const distance = bottomOffset - startPosition;
      const startTime = performance.now();

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animateScroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const nextPosition = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, nextPosition);

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    },
    [duration]
  );

  return smoothScrollToBottom;
};

export default useSmoothScrollToBottom;
