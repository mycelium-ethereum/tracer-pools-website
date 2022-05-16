import { SVGProps } from "types";

const SnapshotSVG: React.FC<SVGProps> = ({ alt, className }) => {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={alt}
      className={`${className ? className : ""}`}
    >
      <path
        d="M16.8035 9.20343L3.98155 19.3771C3.58008 19.6958 3.00008 19.2644 3.24901 18.8315L7.51099 11.4155H0.559397C0.0405841 11.4155 -0.19745 10.817 0.196479 10.5038L12.6824 0.597495C13.0838 0.278814 13.6638 0.710199 13.4149 1.14314L9.3063 8.29247H16.4406C16.9594 8.29247 17.1975 8.89097 16.8035 9.20421V9.20343Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SnapshotSVG;
