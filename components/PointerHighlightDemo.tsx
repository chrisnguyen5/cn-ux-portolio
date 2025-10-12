import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function PointerHighlightDemo() {
  return (
    <div className="text-2xl font-bold tracking-tight md:text-4xl">
      
      <PointerHighlight>
        <span>Chris Nguyen</span>
      </PointerHighlight>
    </div>
  );
}
