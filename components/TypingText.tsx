"use client";

import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function TypingText({ text }: { text: string }) {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Kyle Adkins"],
      typeSpeed: 50,
    });

    return () => typed.destroy();
  }, []);

  return <span ref={typedEl} className="text-primaryGreen"></span>;
}
