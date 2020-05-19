import { useCallback, useRef } from 'react';

const useTooltip = () => {
  const tooltip = useRef(null);

  const onCreateHandler = useCallback(
    tippy => {
      tooltip.current = tippy;
    },
    [tooltip]
  );

  const closeTooltipHandler = useCallback(() => {
    tooltip.current.hide();
  }, [tooltip]);

  return { closeTooltipHandler, onCreateHandler };
};

export default useTooltip;
