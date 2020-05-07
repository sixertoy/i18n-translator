import { useEffect, useState } from 'react';

function useHook() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    return () => {};
  });

  return value;
}

export default useHook;
