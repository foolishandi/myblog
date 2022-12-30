import React, { useEffect, useRef, useState } from "react";
import useIframe from "./useIframe";

export default function FrameWrapper(props) {
  const [height, setHeight] = useState(0);
  const ref = useRef();
  const [size, iframeRef] = useIframe(ref);

  const onload = () => {
    console.log(1);
    setHeight(ref.current.contentDocument.body.scrollHeight);
    if (props.onLoad) props.onLoad();
  };
  //   console.log(size, iframeRef?.querySelectorAll("div"));

  useEffect(() => {}, [height, ref]);
  const config = {
    id: "myIframe",
    name: `myIframe-${Math.random()}`,
    src: "",
    scrolling: "auto",
    ...props,
    style: {
      width: "100%",
      overflow: "auto",
      ...props.style,
      height: height > 300 ? 300 : height ? "100%" : height,
    },
  };
  return <iframe {...config} onLoad={onload} ref={ref}></iframe>;
}
