/**
 * Flat line illustrations for Summate Learning.
 * Brand rules: flat colour only, no gradients, one blue voltage (--su-primary),
 * ink line work. `tone` switches the line colour for dark bands.
 */

type Props = { tone?: "light" | "dark"; className?: string };

function line(tone: Props["tone"]) {
  return tone === "dark" ? "var(--su-on-dark)" : "var(--su-ink)";
}
function faint(tone: Props["tone"]) {
  return tone === "dark" ? "rgba(255,255,255,.16)" : "var(--su-hairline)";
}

/** Hero: a lesson turns into a skill, a skill turns into confidence... a rising path. */
export function PathIllustration({ tone = "light", className }: Props) {
  const ink = line(tone);
  const grid = faint(tone);
  const nodes = [
    { x: 44, y: 250, label: "Lesson" },
    { x: 150, y: 196, label: "Skill" },
    { x: 256, y: 150, label: "Confidence" },
    { x: 362, y: 78, label: "Opportunity" },
  ];
  return (
    <svg
      viewBox="0 0 420 300"
      className={className}
      role="img"
      aria-label="A rising path connecting lesson, skill, confidence and opportunity"
      fill="none"
    >
      {[60, 120, 180, 240].map((y) => (
        <line key={y} x1="16" y1={y} x2="404" y2={y} stroke={grid} strokeWidth="1" />
      ))}
      <path
        d="M44 250 L150 196 L256 150 L362 78"
        stroke="var(--su-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {nodes.map((n, i) => {
        const last = i === nodes.length - 1;
        return (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={n.y}
              r={last ? 9 : 6}
              fill={last ? "var(--su-primary)" : tone === "dark" ? "var(--su-surface-dark)" : "var(--su-canvas)"}
              stroke="var(--su-primary)"
              strokeWidth="2.5"
            />
            <text
              x={n.x}
              y={n.y - 16}
              textAnchor="middle"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="12"
              fontWeight="600"
              fill={ink}
            >
              {n.label}
            </text>
          </g>
        );
      })}
      {/* spark on the final node */}
      <path
        d="M362 52 L362 40 M362 116 L362 104 M336 78 L324 78 M400 78 L388 78"
        stroke="var(--su-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Our story: a book / document with an upward growth mark. */
export function StoryIllustration({ tone = "light", className }: Props) {
  const ink = line(tone);
  return (
    <svg
      viewBox="0 0 260 200"
      className={className}
      role="img"
      aria-label="An open book with a growing sprout"
      fill="none"
    >
      <path
        d="M130 60 C110 44 74 44 40 52 L40 158 C74 150 110 150 130 166 C150 150 186 150 220 158 L220 52 C186 44 150 44 130 60 Z"
        stroke={ink}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M130 60 L130 166" stroke={ink} strokeWidth="2.5" />
      <path d="M56 74 H112 M56 92 H112 M56 110 H100" stroke={ink} strokeWidth="2" strokeLinecap="round" />
      <path d="M148 74 H204 M148 92 H204 M148 110 H192" stroke={ink} strokeWidth="2" strokeLinecap="round" />
      {/* sprout */}
      <path d="M130 40 L130 12" stroke="var(--su-primary)" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M130 24 C120 24 112 16 112 6 C122 6 130 14 130 24 Z"
        fill="var(--su-primary)"
      />
      <path
        d="M130 30 C140 30 148 22 148 12 C138 12 130 20 130 30 Z"
        fill="var(--su-primary)"
      />
    </svg>
  );
}

/** Batch 1 / community: connected people, one highlighted. */
export function CommunityIllustration({ tone = "dark", className }: Props) {
  const ink = line(tone);
  const people = [
    { x: 60, y: 60, on: false },
    { x: 170, y: 40, on: true },
    { x: 280, y: 74, on: false },
    { x: 110, y: 150, on: false },
    { x: 230, y: 158, on: false },
  ];
  return (
    <svg
      viewBox="0 0 340 210"
      className={className}
      role="img"
      aria-label="A close-knit first batch of learners connected together"
      fill="none"
    >
      <path
        d="M60 60 L170 40 L280 74 M170 40 L110 150 M170 40 L230 158 M110 150 L230 158 M60 60 L110 150 M280 74 L230 158"
        stroke={faint(tone)}
        strokeWidth="1.5"
      />
      {people.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x}
            cy={p.y}
            r="15"
            fill={p.on ? "var(--su-primary)" : tone === "dark" ? "var(--su-surface-dark)" : "var(--su-canvas)"}
            stroke={p.on ? "var(--su-primary)" : ink}
            strokeWidth="2.5"
          />
          <circle cx={p.x} cy={p.y - 4} r="4.5" fill={p.on ? "var(--su-on-primary)" : ink} />
          <path
            d={`M${p.x - 7} ${p.y + 9} C${p.x - 7} ${p.y + 1} ${p.x + 7} ${p.y + 1} ${p.x + 7} ${p.y + 9}`}
            fill={p.on ? "var(--su-on-primary)" : ink}
          />
        </g>
      ))}
    </svg>
  );
}
