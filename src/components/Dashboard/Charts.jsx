const CHART_W = 480;
const CHART_H = 200;
const PAD = { top: 20, right: 16, bottom: 32, left: 44 };

function scaleLinear(values, height, min = 0) {
  const max = Math.max(...values, min + 1);
  return (v) => PAD.top + (height - PAD.top - PAD.bottom) * (1 - (v - min) / (max - min));
}

export function LineChart({ data, valueKey = 'value', color = '#06b6d4', unit = 'Cr' }) {
  const values = data.map((d) => d[valueKey]);
  const y = scaleLinear(values, CHART_H);
  const step = (CHART_W - PAD.left - PAD.right) / (data.length - 1);

  const points = data.map((d, i) => `${PAD.left + i * step},${y(d[valueKey])}`).join(' ');
  const areaPoints = `${PAD.left},${CHART_H - PAD.bottom} ${points} ${PAD.left + (data.length - 1) * step},${CHART_H - PAD.bottom}`;

  return (
    <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} className="chart-svg" role="img" aria-label="Line chart">
      {[0, 0.25, 0.5, 0.75, 1].map((pct) => {
        const yPos = PAD.top + (CHART_H - PAD.top - PAD.bottom) * pct;
        const val = (Math.max(...values) * (1 - pct)).toFixed(1);
        return (
          <g key={pct}>
            <line x1={PAD.left} y1={yPos} x2={CHART_W - PAD.right} y2={yPos} className="chart-grid" />
            <text x={PAD.left - 8} y={yPos + 4} className="chart-axis-label" textAnchor="end">{val}</text>
          </g>
        );
      })}
      <polygon points={areaPoints} fill={color} fillOpacity="0.12" />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {data.map((d, i) => (
        <g key={d.month}>
          <circle cx={PAD.left + i * step} cy={y(d[valueKey])} r="4" fill={color} />
          <text x={PAD.left + i * step} y={CHART_H - 10} className="chart-axis-label" textAnchor="middle">{d.month}</text>
        </g>
      ))}
      <text x={PAD.left - 8} y={12} className="chart-unit-label" textAnchor="end">₹{unit}</text>
    </svg>
  );
}

export function BarChart({ data, valueKey = 'orders', color = '#6366f1' }) {
  const values = data.map((d) => d[valueKey]);
  const max = Math.max(...values);
  const barW = (CHART_W - PAD.left - PAD.right) / data.length - 12;

  return (
    <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} className="chart-svg" role="img" aria-label="Bar chart">
      {data.map((d, i) => {
        const barH = ((CHART_H - PAD.top - PAD.bottom) * d[valueKey]) / max;
        const x = PAD.left + i * ((CHART_W - PAD.left - PAD.right) / data.length) + 6;
        const y = CHART_H - PAD.bottom - barH;
        return (
          <g key={d.month}>
            <rect x={x} y={y} width={barW} height={barH} rx="4" fill={color} opacity="0.85" />
            <text x={x + barW / 2} y={y - 6} className="chart-bar-value" textAnchor="middle">{d[valueKey]}</text>
            <text x={x + barW / 2} y={CHART_H - 10} className="chart-axis-label" textAnchor="middle">{d.month}</text>
          </g>
        );
      })}
    </svg>
  );
}

export function DonutChart({ data, size = 180 }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.36;
  const stroke = size * 0.18;
  const circ = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div className="donut-wrap">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Donut chart">
        {data.map((d) => {
          const dash = (d.value / 100) * circ;
          const gap = circ - dash;
          const el = (
            <circle
              key={d.label}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={d.color}
              strokeWidth={stroke}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offset}
              transform={`rotate(-90 ${cx} ${cy})`}
              strokeLinecap="butt"
            />
          );
          offset += dash;
          return el;
        })}
        <text x={cx} y={cy - 6} className="donut-center-value" textAnchor="middle">₹42.8Cr</text>
        <text x={cx} y={cy + 14} className="donut-center-label" textAnchor="middle">YTD Revenue</text>
      </svg>
      <div className="donut-legend">
        {data.map((d) => (
          <div key={d.label} className="donut-legend-item">
            <span className="donut-legend-dot" style={{ background: d.color }} />
            <span>{d.label}</span>
            <strong>{d.value}%</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HorizontalBarChart({ data, valueKey = 'share' }) {
  const max = Math.max(...data.map((d) => d[valueKey]));

  return (
    <div className="h-bar-chart">
      {data.map((d) => (
        <div key={d.category} className="h-bar-row">
          <div className="h-bar-label">{d.category}</div>
          <div className="h-bar-track">
            <div
              className="h-bar-fill"
              style={{ width: `${(d[valueKey] / max) * 100}%` }}
            />
          </div>
          <div className="h-bar-value">₹{d.revenue} Cr</div>
        </div>
      ))}
    </div>
  );
}

export function StackedBar({ data }) {
  return (
    <div className="stacked-bar">
      {data.map((d) => (
        <div
          key={d.label}
          className="stacked-segment"
          style={{ width: `${d.value}%`, background: d.color }}
          title={`${d.label}: ${d.value}%`}
        />
      ))}
    </div>
  );
}

export function ActivationGauge({ current, target, monthly }) {
  const pct = Math.round((current / target) * 100);
  const values = monthly.map((m) => m.count);
  const y = scaleLinear(values, 120);
  const step = (320 - 40) / (monthly.length - 1);

  const points = monthly.map((m, i) => `${20 + i * step},${y(m.count)}`).join(' ');

  return (
    <div className="activation-gauge">
      <div className="gauge-ring">
        <svg viewBox="0 0 120 120" width="120" height="120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="var(--bg-hover)" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="10"
            strokeDasharray={`${(pct / 100) * 314} 314`}
            transform="rotate(-90 60 60)"
            strokeLinecap="round"
          />
          <text x="60" y="56" className="gauge-value" textAnchor="middle">{pct}%</text>
          <text x="60" y="74" className="gauge-label" textAnchor="middle">of target</text>
        </svg>
        <div className="gauge-stats">
          <div><strong>{current.toLocaleString()}</strong><span>Activated</span></div>
          <div><strong>{target.toLocaleString()}+</strong><span>Target</span></div>
        </div>
      </div>
      <svg viewBox="0 0 320 120" className="chart-svg mini-spark" role="img" aria-label="Activation trend">
        <polyline points={points} fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        {monthly.map((m, i) => (
          <circle key={m.month} cx={20 + i * step} cy={y(m.count)} r="3" fill="#10b981" />
        ))}
      </svg>
    </div>
  );
}

export function InventoryPieLegend({ data }) {
  return (
    <div className="pie-legend-grid">
      {data.map((d) => (
        <div key={d.label} className="pie-legend-card">
          <div className="pie-legend-bar" style={{ background: d.color, width: `${d.value}%` }} />
          <div className="pie-legend-info">
            <span>{d.label}</span>
            <strong>{d.value}%</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
