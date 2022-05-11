import OptimisedImage from "@components/Shared/OptimisedImage";
import PageLink from "@components/Shared/PageLink";

const GuideTile: React.FC<{
  link: string;
  background: string;
  logo: string;
  alt: string;
  tokens?: boolean;
}> = ({ link, background, logo, alt, tokens }) => {
  const transitionStyles =
    "transition-all duration-500 [transform:translateZ(0)_perspective(999px)] group-hover:[transform:translateZ(0)_perspective(999px)_scale3d(1.05,1.05,1.0)_translateX(-10px)]";

  return (
    <PageLink href={link}>
      <article className="group relative flex h-[200px] w-full items-center rounded-lg bg-tracer-navy pl-8">
        <div>
          <img src={logo} alt={alt} className="h-5" />
          <span className="mt-1 block whitespace-nowrap text-[40px] font-light leading-[44px] text-white">
            User Guide
          </span>
        </div>
        {tokens && (
          <div
            className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-[200px]`}
          >
            <OptimisedImage
              src="/img/shared/link-token.png"
              alt="Link Token"
              absolute
              className="-top-7 right-8 max-w-[148px]"
            />
            <OptimisedImage
              src="/img/shared/btc-token.png"
              alt="BTC Token"
              absolute
              className="-bottom-4 -right-4 max-w-[133px]"
            />
          </div>
        )}
        <div className="absolute right-0 top-0 h-full w-full overflow-hidden rounded-md">
          <OptimisedImage
            src={background}
            alt=""
            absolute
            className={`pointer-events-none top-0 right-0 h-full max-w-[402px] ${transitionStyles}`}
          />
        </div>
      </article>
    </PageLink>
  );
};

export default GuideTile;
