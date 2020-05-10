import { useCallback, useEffect, useState } from 'react';

function useScroller(scroller) {
  const [shadow, setShadow] = useState(null);
  const [left, setLeftPosition] = useState(0);

  const handleScroll = useCallback(() => {
    const { current } = scroller;
    if (!current) return;
    const { scrollLeft } = current;
    setShadow(scrollLeft > 0);
    setLeftPosition(scrollLeft);
  }, [scroller]);

  useEffect(() => {
    // https://fr.reactjs.org/docs/react-api.html#reactforwardref
    const { current } = scroller;
    if (current) current.addEventListener('scroll', handleScroll);
    return () => {
      if (current) {
        current.removeEventListener('scroll', () => handleScroll);
      }
    };
  }, [handleScroll, scroller]);

  return { left, shadow };
}

export default useScroller;
