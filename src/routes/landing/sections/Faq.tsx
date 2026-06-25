import { FAQ_ITEMS } from "../data";

export default function Faq() {
  const qa = FAQ_ITEMS;
  return (
    <section id="faq" className="px-4 py-28">
      <div className="mx-auto max-w-3xl" data-reveal>
        <h2 className="text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
          <span className="font-display-italic">Questions</span>{" "}
          <span className="font-display font-medium">fréquentes.</span>
        </h2>
        <div className="mt-10 divide-y divide-rule border-y border-rule">
          {qa.map((it) => (
            <details key={it.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <span className="font-display text-xl leading-snug">{it.q}</span>
                <span className="mt-1 inline-grid h-7 w-7 shrink-0 place-items-center rounded-full border border-rule text-base transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
