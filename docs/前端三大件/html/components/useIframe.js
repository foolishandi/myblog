import React, { useEffect, useRef, useState } from "react";

export default function useIframe(ref, selector) {
  const [size, setSize] = useState({ H: 0, W: 0 });
  const resRef = useRef(ref ? ref.current : document.querySelector(selector));
  if (resRef.current) {
    const _onload = resRef.current.onload;
    resRef.current.onload = (e) => {
      if (_onload) _onload();
      console.log(resRef.current.contentDocument?.body.scrollHeight);
      setSize({
        H: resRef.current.contentDocument?.body.scrollHeight,
        W: resRef.current.contentDocument?.body.scrollWidth,
      });
    };
  }
  useEffect(() => {
    resRef.current = ref ? ref.current : document.querySelector(selector);
  }, [size.H, resRef]);
  return [
    size,
    resRef.current ? resRef.current.contentDocument?.body : resRef.current,
  ];
}
