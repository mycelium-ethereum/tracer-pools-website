import { setCopyrightYear } from "@lib/helpers";
import { useEffect, useRef } from "react";

const CopyrightYear: React.FC<{
  className?: string;
}> = ({ className }) => {
  const yearRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setCopyrightYear(yearRef);
  }, []);

  return (
    <span className={className ? className : ""}>
      © <span ref={yearRef}></span> Tracer DAO
    </span>
  );
};

export default CopyrightYear;
