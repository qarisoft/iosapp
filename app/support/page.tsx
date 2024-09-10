"use client";
// import { title } from "@/components/primitives";
import { NextUILogo } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";

export default function SupportPage() {
  return (
    <div className="static">
      {/*<h1 className={title()}>Docs</h1>*/}
      <section className="ps">
        <p>{siteConfig.supportData.description}</p>
        <div className="h-5" />
        <ul className={"list-disc ps-4 pt-2"}>
          <li className={""}>
            <a href={"tel:0549886314"}>
              هاتف - واتس اب :{" "}
              <span className={"en bg-blue right-0"}>
                {siteConfig.supportData.phone}
              </span>
            </a>
          </li>
          {/*<li> واتس اب : {siteConfig.supportData.phone}</li>*/}
          <li> ايميل : {siteConfig.supportData.email}</li>
        </ul>
      </section>
      <WhatsApp />
    </div>
  );
}


const WhatsApp = () => {
  return (
    <div className="absolute bottom-20 right-20 p-4 bg-blue- ">
      {/*<img alt={""} src={"whatsapp.svg"} />*/}
      <Link isExternal href={`https://wa.me/966549886314`}>
        <NextUILogo className={""} />
      </Link>
    </div>
  );
};
