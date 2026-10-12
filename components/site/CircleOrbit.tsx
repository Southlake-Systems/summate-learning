/**
 * Decorative orbit for the Summate Circle hero: "you" at the centre, the
 * eight things that happen inside the Circle on the outer ring, and members
 * slowly orbiting in between.
 */
const C = 260; // centre
const colors = ["#1E3ABA", "#7C3AED", "#FF2D75", "#FF8A00", "#00D4C8", "#00B4FF"];

function point(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: C + r * Math.cos(a), y: C + r * Math.sin(a) };
}

export default function CircleOrbit({ labels }: { labels: string[] }) {
  const members = Array.from({ length: 12 }, (_, i) => ({
    ...point(i % 2 ? 150 : 104, i * 30 + (i % 2 ? 12 : 0)),
    color: colors[i % colors.length],
    size: i % 3 === 0 ? 9 : 6,
  }));

  return (
    <svg viewBox="-60 0 640 520" className="h-auto w-full" role="img" aria-label="You at the centre of the Summate Circle">
      <defs>
        <radialGradient id="orbit-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={C} cy={C} r="120" fill="url(#orbit-core)" />
      {[60, 104, 150, 205].map((r, i) => (
        <circle
          key={r}
          cx={C}
          cy={C}
          r={r}
          fill="none"
          stroke="white"
          strokeOpacity={i === 3 ? 0.22 : 0.12}
          strokeDasharray={i === 2 ? "2 6" : undefined}
        />
      ))}

      {/* Members — the one moving element on the page. */}
      <g className="origin-center animate-[spin_90s_linear_infinite]" style={{ transformOrigin: `${C}px ${C}px` }}>
        {members.map((m, i) => (
          <circle key={i} cx={m.x} cy={m.y} r={m.size} fill={m.color} />
        ))}
      </g>

      <circle cx={C} cy={C} r="44" fill="white" />
      <text x={C} y={C + 7} textAnchor="middle" className="fill-[#0D1222] font-display" fontSize="22" fontWeight="700">
        You
      </text>

      {labels.map((label, i) => {
        const p = point(205, i * (360 / labels.length));
        const w = label.length * 8.4 + 26;
        return (
          <g key={label}>
            <rect x={p.x - w / 2} y={p.y - 15} width={w} height="30" rx="15" fill="#151D36" stroke="white" strokeOpacity="0.18" />
            <text x={p.x} y={p.y + 5} textAnchor="middle" fill="white" fontSize="14" fontWeight="600" className="font-sans">
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
