import { useCallback, useEffect, useRef, useState } from 'react';

const useFile = () => {
  const ref = useRef(null);
  const [json, setJson] = useState(null);
  // useDebugValue(json);

  const onUploadChange = useCallback(evt => {
    evt.preventDefault();
    try {
      const [file] = evt.target.files;
      const reader = new FileReader();
      reader.onload = e => {
        e.preventDefault();
        setJson(e.target.result);
      };
      reader.readAsText(file);
    } catch (error) {
      setJson(null);
    }
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
