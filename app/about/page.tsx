import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  const a =
    ""

  const b = "."
  const c = ""
  return (
    <div className='text-start'>
      <h1 className={title({class:"",size: "xs"})}>
        تطبيق ماي سند
      </h1>
      <div className="h-5"></div>
      <ol className="space-y-2 list-disc">

      {siteConfig.aboutData.items.map((a,i)=> (
        <li key={i} >{a}</li>
      ))}
      </ol>
    </div>
  );
}
