"use client";
import { title } from "@/components/primitives";
// import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { siteConfig } from "@/config/site";
import AccordionCollection from "@/components/accordion";
// import { PrivacySec }
// import AccordionCollection from "@/components/accordion";

export default function PrivacyPage() {
  return (
    <div className='ar'>
      {/*<h1 className={title()}>Pricing</h1>*/}
      <AccordionCollection data={siteConfig.privacyPolicy.data} />
    </div>
  );
}
