import React from "react";

/**
 * Inline SVG so the diagram needs no runtime library and survives
 * prerendering. Colors come from the active theme.
 */
export default function ArchitectureDiagram({ theme }) {
  const line = theme.imageHighlight;
  const text = theme.text;
  const muted = theme.secondaryText;
  const box = "#ffffff";

  const Box = ({ x, y, w, h, label, sub }) => (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill={box}
        stroke={line}
        strokeWidth="1.5"
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 4 : y + h / 2 + 5}
        textAnchor="middle"
        fill={text}
        fontSize="14"
        fontFamily="Google Sans Regular, sans-serif"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 14}
          textAnchor="middle"
          fill={muted}
          fontSize="11"
          fontFamily="Google Sans Regular, sans-serif"
        >
          {sub}
        </text>
      )}
    </g>
  );

  return (
    <div className="architecture-diagram">
      <svg
        viewBox="0 0 760 430"
        role="img"
        aria-label="Health Compass architecture: Astro assessment pages autosave through edge functions into Supabase Postgres with row-level security; on submit a serverless scoring function returns results rendered with D3, which can be exported as PDF or emailed via Resend."
      >
        <defs>
          <marker
            id="hc-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={line} />
          </marker>
        </defs>

        <Box
          x="20"
          y="20"
          w="200"
          h="58"
          label="Astro pages"
          sub="assessment flow, static HTML"
        />
        <Box
          x="20"
          y="180"
          w="200"
          h="58"
          label="Edge function"
          sub="autosave"
        />
        <Box
          x="280"
          y="180"
          w="200"
          h="58"
          label="Supabase / PostgreSQL"
          sub="row-level security"
        />
        <Box
          x="280"
          y="20"
          w="200"
          h="58"
          label="Serverless function"
          sub="scoring engine"
        />
        <Box
          x="540"
          y="20"
          w="200"
          h="58"
          label="D3 results view"
          sub="client-side render"
        />
        <Box
          x="540"
          y="180"
          w="200"
          h="58"
          label="Resend"
          sub="email delivery"
        />
        <Box
          x="540"
          y="320"
          w="200"
          h="58"
          label="PDF export"
          sub="downloadable result"
        />

        <g
          stroke={line}
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#hc-arrow)"
        >
          <path d="M 120 78 L 120 180" />
          <path d="M 220 209 L 280 209" />
          <path d="M 220 49 L 280 49" />
          <path d="M 380 180 L 380 78" />
          <path d="M 480 49 L 540 49" />
          <path d="M 640 78 L 640 180" />
          <path d="M 640 238 L 640 320" />
        </g>

        <g
          fill={muted}
          fontSize="11"
          fontFamily="Google Sans Regular, sans-serif"
        >
          <text x="128" y="135">
            progress
          </text>
          <text x="228" y="200">
            write
          </text>
          <text x="228" y="40">
            submit
          </text>
          <text x="388" y="135">
            read
          </text>
          <text x="488" y="40">
            score
          </text>
          <text x="648" y="135">
            send
          </text>
          <text x="648" y="285">
            export
          </text>
        </g>
      </svg>
    </div>
  );
}
