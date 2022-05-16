import { SVGProps } from "types";

const GithubSVG: React.FC<SVGProps> = ({ alt, className }) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={alt}
      className={`${className ? className : ""}`}
    >
      <path
        d="M6.45996 13.7109C6.45996 13.6406 6.38965 13.5703 6.28418 13.5703C6.17871 13.5703 6.1084 13.6406 6.1084 13.7109C6.1084 13.7812 6.17871 13.8516 6.28418 13.8164C6.38965 13.8164 6.45996 13.7812 6.45996 13.7109ZM5.37012 13.5352C5.37012 13.6055 5.44043 13.7109 5.5459 13.7109C5.61621 13.7461 5.72168 13.7109 5.75684 13.6406C5.75684 13.5703 5.72168 13.5 5.61621 13.4648C5.51074 13.4297 5.40527 13.4648 5.37012 13.5352ZM6.95215 13.5C6.84668 13.5 6.77637 13.5703 6.77637 13.6758C6.77637 13.7461 6.88184 13.7812 6.9873 13.7461C7.09277 13.7109 7.16309 13.6758 7.12793 13.6055C7.12793 13.5352 7.02246 13.4648 6.95215 13.5ZM9.2373 0C4.38574 0 0.65918 3.72656 0.65918 8.57812C0.65918 12.4805 3.08496 15.8203 6.60059 17.0156C7.05762 17.0859 7.19824 16.8047 7.19824 16.5938C7.19824 16.3477 7.19824 15.1523 7.19824 14.4141C7.19824 14.4141 4.7373 14.9414 4.20996 13.3594C4.20996 13.3594 3.82324 12.3398 3.26074 12.0938C3.26074 12.0938 2.45215 11.5312 3.2959 11.5312C3.2959 11.5312 4.1748 11.6016 4.66699 12.4453C5.44043 13.8164 6.70605 13.4297 7.2334 13.1836C7.30371 12.6211 7.51465 12.2344 7.7959 11.9883C5.82715 11.7773 3.82324 11.4961 3.82324 8.12109C3.82324 7.13672 4.10449 6.67969 4.66699 6.04688C4.56152 5.80078 4.28027 4.88672 4.77246 3.65625C5.47559 3.44531 7.19824 4.60547 7.19824 4.60547C7.90137 4.39453 8.63965 4.32422 9.37793 4.32422C10.1514 4.32422 10.8896 4.39453 11.5928 4.60547C11.5928 4.60547 13.2803 3.41016 14.0186 3.65625C14.5107 4.88672 14.1943 5.80078 14.124 6.04688C14.6865 6.67969 15.0381 7.13672 15.0381 8.12109C15.0381 11.4961 12.9639 11.7773 10.9951 11.9883C11.3115 12.2695 11.5928 12.7969 11.5928 13.6406C11.5928 14.8008 11.5576 16.2773 11.5576 16.5586C11.5576 16.8047 11.7334 17.0859 12.1904 16.9805C15.7061 15.8203 18.0967 12.4805 18.0967 8.57812C18.0967 3.72656 14.124 0 9.2373 0ZM4.06934 12.1289C3.99902 12.1641 4.03418 12.2695 4.06934 12.3398C4.13965 12.375 4.20996 12.4102 4.28027 12.375C4.31543 12.3398 4.31543 12.2344 4.24512 12.1641C4.1748 12.1289 4.10449 12.0938 4.06934 12.1289ZM3.68262 11.8477C3.64746 11.918 3.68262 11.9531 3.75293 11.9883C3.82324 12.0234 3.89355 12.0234 3.92871 11.9531C3.92871 11.918 3.89355 11.8828 3.82324 11.8477C3.75293 11.8125 3.71777 11.8125 3.68262 11.8477ZM4.80762 13.1133C4.77246 13.1484 4.77246 13.2539 4.87793 13.3242C4.94824 13.3945 5.05371 13.4297 5.08887 13.3594C5.12402 13.3242 5.12402 13.2188 5.05371 13.1484C4.9834 13.0781 4.87793 13.043 4.80762 13.1133ZM4.4209 12.5859C4.35059 12.6211 4.35059 12.7266 4.4209 12.7969C4.49121 12.8672 4.56152 12.9023 4.63184 12.8672C4.66699 12.832 4.66699 12.7266 4.63184 12.6562C4.56152 12.5859 4.49121 12.5508 4.4209 12.5859Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GithubSVG;