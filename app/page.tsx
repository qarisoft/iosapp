import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ar bg-blue- lg:h-full">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1
          className={title({ class: "leading" })}
          style={{ lineHeight: "70px" }}
        >
          {siteConfig.description}
        </h1>
      </div>
      <div className="h-5"></div>
      <div className="flex gap-3">


        <Link
          // isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
            class:"pt-1"
          })}
          href="/privacy"
        >
          {siteConfig.home.privacy}

        </Link>

        <Link
          isExternal
          className={buttonStyles({
            // color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/support"
        >
          {siteConfig.home.support}

        </Link>
      </div>

    </section>
  );
}
