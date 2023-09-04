"use client";

import { useRef, useEffect } from "react";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cursor.current !== null) {
      const moveCursor = (evt: MouseEvent) => {
        const { clientX: x, clientY: y } = evt;
        cursor.current!.style.left = x + "px";
        cursor.current!.style.top = y + "px";
      };

      const addActiveClass = () => {
        cursor.current!.classList.add("cursorActive");
      };

      const removeActiveClass = () => {
        cursor.current!.classList.remove("cursorActive");
      };

      window.addEventListener("mousemove", moveCursor);

      const clickableEls = document.querySelectorAll("a, button");
      clickableEls.forEach((el) => {
        el.addEventListener("mousemove", addActiveClass);

        el.addEventListener("mouseleave", removeActiveClass);
      });

      return () => {
        window.removeEventListener("mousemove", moveCursor);

        clickableEls.forEach((el) => {
          el.removeEventListener("mousemove", addActiveClass);

          el.removeEventListener("mouseleave", removeActiveClass);
        });
      };
    }
  }, [cursor]);

  return <div ref={cursor} className="cursor"></div>;
}
