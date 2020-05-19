import { useCallback, useRef } from 'react';

const useTooltip = () => {
  const tooltip = useRef(null);

  const createTooltip = useCallback(
    tippy => {
      tooltip.current = tippy;
    },
    [tooltip]
  );

  const closeTooltip = useCallback(() => {
    tooltip.current.hide();
  }, [tooltip]);

  return { closeTooltip, createTooltip, tooltip };
};

export default useTooltip;
