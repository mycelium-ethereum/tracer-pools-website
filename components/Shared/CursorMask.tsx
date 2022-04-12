import { useEffect } from "react";

const CursorMask: React.FC<{}> = () => {
  //   document.addEventListener(
  //     "touchmove",
  //     function (e) {
  //       e.preventDefault();
  //       const touch = e.targetTouches[0];
  //       if (touch) {
  //         update(cursorPoint(touch, svgElement));
  //       }
  //     },
  //     false
  //   );

  const cursorPoint = (e, svg, svgPoint) => {
    svgPoint.x = e.clientX;
    svgPoint.y = e.clientY;
    return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
  };

  const update = (svgCoords, maskedElement, circleFeedback) => {
    maskedElement.setAttribute("cx", svgCoords.x);
    maskedElement.setAttribute("cy", svgCoords.y);
    circleFeedback.setAttribute("cx", svgCoords.x);
    circleFeedback.setAttribute("cy", svgCoords.y);
  };

  useEffect(() => {
    const svgElement = document.querySelector(".svg-mask") as SVGSVGElement;
    const maskedElement = document.querySelector("#mask-circle");
    const circleFeedback = document.querySelector("#circle-shadow");
    const svgPoint = svgElement.createSVGPoint();

    const handleMouseMove = (e) => {
      update(
        cursorPoint(e, svgElement, svgPoint),
        maskedElement,
        circleFeedback
      );
    };

    window.addEventListener("mousemove", handleMouseMove, false);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove, false);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute top-0 left-0 z-50 h-screen w-screen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          <clipPath id="mask">
            <circle id="mask-circle" cx="50%" cy="50%" r="8%" fill="#ffffff" />
          </clipPath>
        </defs>
        <g clip-path="url(#mask)">
          <rect width="100%" height="100%" fill="#FFF" />
          <image xlinkHref="/img/home/mesh.svg" width="100%" height="100%" />
        </g>
        <circle
          id="circle-shadow"
          cx="50%"
          cy="50%"
          r="8%"
          fill="transparent"
          className="blur-2"
          filter="url(#blur)"
        />
      </svg>
    </div>
  );
};

export default CursorMask;
