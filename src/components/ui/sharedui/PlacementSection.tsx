import { Settings } from "lucide-react";

type Placement = "top-right" | "bottom-right";

export default function PlacementSection({
  placement,
  setPlacement,
}: {
  placement: Placement;
  setPlacement: (p: Placement) => void;
}) {
  return (
    <div className="border-b border-dotted border-muted/50 p-1">
      <label className="block font-medium mb-1 flex items-center gap-1">
       Panel Placement
      </label>
      <select
        value={placement}
        onChange={(e) => setPlacement(e.target.value as Placement)}
        className="w-full p-2 rounded-lg bg-muted text-sm"
      >
        <option value="top-right">Top Right</option>
        <option value="bottom-right">Bottom Right</option>
      </select>
    </div>
  );
}
