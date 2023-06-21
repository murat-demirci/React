"use client";

import { useAppDispatch } from "@/redux/hooks/hooks";
import React from "react";

export default function HomeContainer({ children }: React.PropsWithChildren) {
  const dispatch = useAppDispatch();
  document.addEventListener("wheel", mouseWheel(dispatch));

  return (
    <>
      <div>{children}</div>
    </>
  );
}

//wheel event function *6
const mouseWheel = function (dispatch: any) {
  return function MouseWheel(e: any) {
    const elements: NodeListOf<Element> = document.querySelectorAll(".active");
    elements.forEach((element: Element) => element.classList.remove("active"));
    if (e.wheelDelta > 0) {
      //scroll up
      const prevSibling =
        elements[1] === undefined
          ? elements[0].previousElementSibling
          : elements[1].id == 'footer' ? document.getElementById("bottom")?.previousElementSibling: elements[1].previousElementSibling;
      if (prevSibling == null) {
        document.getElementById("top")?.classList.add("active");
        document.getElementById("nav")?.classList.add("active");
        return;
      } else if (elements[0]?.id == "nav") {
        document.getElementById("top")?.classList.add("active");
        document.getElementById("nav")?.classList.add("active");
        return;
      } else if (prevSibling.id == "top") {
        document.getElementById("top")?.classList.add("active");
        document.getElementById("nav")?.classList.add("active");
        return; 
      }
      prevSibling.classList.add("active");
    } else {
      //scroll down
      const nextSibling =
        elements[1] === undefined
          ? elements[0].nextElementSibling
          : elements[1].id == 'footer' ? document.getElementById("bottom"): elements[1].nextElementSibling;

      if (nextSibling == null) {
        return;
      } else if (elements[1]?.id == "footer") {
        document.getElementById("bottom")?.classList.add("active");
        document.getElementById("footer")?.classList.add("active");
      } else if (nextSibling.id == "bottom") {
        document.getElementById("bottom")?.classList.add("active");
        document.getElementById("footer")?.classList.add("active");
        return;
      }
      nextSibling.classList.add("active");
    }
  };
};
