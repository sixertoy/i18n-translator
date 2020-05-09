import { useEffect, useState } from 'react';

function useProjects() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    return () => {};
  });

  return value;
}

export default useProjects;
