import { Accordion, AccordionItem } from "@nextui-org/accordion";

type P = {
  title?: string;
  items: string[];
};

type Props = {
  data: P[];
};

const AccordionCollection = ({ data }: Props) => {
  return (
    <div>
      <Accordion defaultExpandedKeys={["main-0"]}>
        {data.map((item, index) => (
          <AccordionItem
            key={`main-${index}`}
            aria-label="Theme"
            title={item.title}
          >
            <ol className="list-disc p-5 text-start">
              {item.items.map((it, ii) => (
                <li key={`${ii}.${index}`}>{it}</li>
              ))}
            </ol>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionCollection;
