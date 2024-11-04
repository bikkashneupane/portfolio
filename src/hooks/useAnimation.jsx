import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useAnimation = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return { ref, hasAnimated, setHasAnimated };
};

export default useAnimation;
