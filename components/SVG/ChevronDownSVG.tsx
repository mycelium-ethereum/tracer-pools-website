const ChevronDownSVG: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <path
        d="M11.8765 0.430373L11.69 0.247194C11.5665 0.125935 11.3669 0.125935 11.2434 0.247194L6.11085 5.29105L0.975629 0.247194C0.852174 0.125935 0.652544 0.125935 0.529088 0.247194L0.342592 0.430373C0.219136 0.551632 0.219136 0.74771 0.342592 0.868969L5.88495 6.31531C6.00841 6.43656 6.20804 6.43656 6.33149 6.31531L11.8739 0.868969C11.9999 0.74771 11.9999 0.551632 11.8765 0.430373Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChevronDownSVG;