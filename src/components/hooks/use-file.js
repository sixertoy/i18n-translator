import { useCallback, useEffect, useRef, useState } from 'react';

const useFile = () => {
  const ref = useRef(null);
  const [json, setJson] = useState(null);

  const onUploadChange = useCallback(evt => {
    evt.preventDefault();
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.onload = e => {
      e.preventDefault();
      setJson(e.target.result);
    };
    reader.readAsText(file);
  }, []);

  useEffect(() => {
    const { current } = ref;
    current.addEventListener('change', onUploadChange);
    return () => {
      current.removeEventListener('change', () => onUploadChange);
    };
  }, [onUploadChange]);

  return { json, ref };
};

export default useFile;
