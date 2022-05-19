import OptimisedImage from "@components/Shared/OptimisedImage";
import PageLink from "@components/Shared/PageLink";
import { SVGProps } from "types";

const GuideTile: React.FC<{
  link: string;
  background: string;
  Logo: React.FC<SVGProps>;
  tokens?: boolean;
}> = ({ link, background, Logo, tokens }) => {
  const transitionStyles =
    "transition-all duration-500 [transform:translateZ(0)_perspective(999px)_scale3d(1,1,1)] group-hover:[transform:translateZ(0)_perspective(999px)_scale3d(1.05,1.05,1.0)_translateX(-10px)]";

  return (
    <PageLink href={link}>
      <article className="group relative flex h-[120px] w-full items-center rounded-lg bg-tracer-navy pl-8 xs:h-[150px] sm:h-[200px]">
        <div>
          <Logo className="h-4 text-white sm:h-5" />
          <span className="mt-1 block whitespace-nowrap text-2xl font-light leading-[28px] text-white sm:text-[40px] sm:leading-[44px]">
            User Guide
          </span>
        </div>
        {tokens && (
          <div className="pointer-events-none absolute -right-10 top-1/2 z-10 h-[200px] w-[200px] [transform:translateZ(0)_translateY(-50%)_perspective(999px)_scale3d(0.6,0.6,1)] xs:-right-4 xs:[transform:translateZ(0)_translateY(-50%)_perspective(999px)_scale3d(0.8,0.8,1)] sm:right-0 sm:[transform:translateZ(0)_translateY(-50%)_perspective(999px)_scale3d(1,1,1)]">
            <OptimisedImage
              src="/img/shared/link-token.png"
              alt="Link Token"
              className="absolute -top-7 right-8 max-w-[148px]"
            />
            <OptimisedImage
              src="/img/shared/btc-token.png"
              alt="BTC Token"
              className="absolute -bottom-3 -right-4 max-w-[133px]"
            />
          </div>
        )}
        <div className="absolute right-0 top-0 h-full w-full overflow-hidden rounded-md">
          <OptimisedImage
            src={background}
            alt=""
            className={`pointer-events-none absolute top-0 right-0 h-full max-w-[402px] ${transitionStyles}`}
          />
        </div>
      </article>
    </PageLink>
  );
};

export default GuideTile;
