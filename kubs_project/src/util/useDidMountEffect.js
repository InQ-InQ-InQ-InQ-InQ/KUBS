import React, { useEffect, useRef } from 'react';

const useDidMountEffect = (func) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, []);
};

export default useDidMountEffect;
