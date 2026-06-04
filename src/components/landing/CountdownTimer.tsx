import { Clock } from "lucide-react";
import { useCountdown } from "@/hooks/use-countdown";

export function CountdownTimer() {
  const { hours, minutes, seconds } = useCountdown(24);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-red-400">
      <Clock className="size-3.5" />
      <span>Oferta termina em</span>
      <span className="tabular-nums">
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </span>
    </span>
  );
}
