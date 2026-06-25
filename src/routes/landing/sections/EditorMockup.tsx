import type { CSSProperties } from "react";
import {
  Undo2,
  Redo2,
  Type,
  Image as ImageIcon,
  Film,
  Shapes,
  Smile,
  Wand2,
  MousePointer2,
  Palette,
  Layers,
  Download,
} from "lucide-react";

export default function EditorMockup() {
  return (
    <div className="relative animate-rise [animation-delay:120ms]">
      <div className="relative overflow-hidden rounded-2xl border border-rule bg-card shadow-[0_30px_80px_-30px_rgba(15,18,35,0.25)]">
        <div className="flex items-center justify-between border-b border-rule px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.08_30)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.88_0.08_90)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.08_150)]" />
            <span className="ml-3 text-xs text-muted-foreground">memeforge — sans-titre</span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <Undo2 className="h-4 w-4 text-muted-foreground" />
            <Redo2 className="h-4 w-4 text-muted-foreground" />
            <span className="ml-2 rounded-md border border-rule px-2 py-1 text-[11px] text-muted-foreground">
              1080 × 1080
            </span>
          </div>
        </div>

        <div className="grid grid-cols-[56px_1fr]">
          <div className="flex flex-col items-center gap-1 border-r border-rule py-3">
            {[Type, ImageIcon, Film, Shapes, Smile, Wand2].map((Icon, i) => (
              <span
                key={i}
                className={`grid h-9 w-9 place-items-center rounded-lg ${
                  i === 5 ? "bg-ink text-primary-foreground" : "text-foreground/70"
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>

          <div className="relative aspect-square bg-[oklch(0.97_0.005_250)]">
            <div
              className="absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div
              className="absolute left-[12%] top-[14%] h-[58%] w-[76%] rounded-xl bg-[oklch(0.22_0.02_270)] animate-float"
              style={{ ["--r" as string]: "-1.2deg" } as CSSProperties}
            >
              <div className="absolute inset-x-6 top-5 text-center">
                <span className="font-display text-2xl text-white sm:text-3xl">
                  QUAND LE CAFÉ
                </span>
              </div>
              <div className="absolute inset-x-6 bottom-5 text-center">
                <span className="font-display text-2xl text-white sm:text-3xl">
                  FAIT EFFET À 16H
                </span>
              </div>
              <span className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-sm border border-ink bg-paper" />
              <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-sm border border-ink bg-paper" />
              <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 rounded-sm border border-ink bg-paper" />
              <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 rounded-sm border border-ink bg-paper" />
            </div>

            <div
              className="absolute right-[8%] top-[10%] flex h-12 w-12 items-center justify-center rounded-full border border-rule bg-paper shadow-sm animate-float"
              style={{ ["--r" as string]: "8deg", animationDelay: "0.6s" } as CSSProperties}
            >
              <span className="text-xl">★</span>
            </div>

            <div
              className="absolute bottom-[8%] left-[6%] rounded-2xl border border-ink bg-paper px-3 py-2 text-xs font-medium text-ink animate-float"
              style={{ ["--r" as string]: "-3deg", animationDelay: "0.3s" } as CSSProperties}
            >
              POV : il est 23h
            </div>

            <div className="absolute right-[14%] bottom-[18%] flex items-center gap-1.5">
              <MousePointer2 className="h-4 w-4 -rotate-12 text-ink" />
              <span className="rounded-md bg-ink px-2 py-1 text-[10px] font-medium text-primary-foreground">
                IA · génération
                <span className="ml-1 animate-blink">●</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-rule px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="chip">
              <Type className="h-3.5 w-3.5" />
              Impact · 56
            </span>
            <span className="chip">
              <Palette className="h-3.5 w-3.5" />
              Contour
            </span>
            <span className="hidden chip sm:inline-flex">
              <Layers className="h-3.5 w-3.5" />
              Calque 3
            </span>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-primary-foreground">
            <Download className="h-3.5 w-3.5" />
            Exporter
          </span>
        </div>
      </div>

      <div className="absolute -left-3 top-6 hidden rotate-[-6deg] rounded-md border border-rule bg-paper px-2.5 py-1 text-[11px] font-medium shadow-sm md:block">
        WebM · 5 Mbps
      </div>
      <div className="absolute -right-2 bottom-10 hidden rotate-[5deg] rounded-md border border-rule bg-paper px-2.5 py-1 text-[11px] font-medium shadow-sm md:block">
        PNG · 1:1
      </div>
    </div>
  );
}
