export const DEFAULT_STEPS = [
  { y: 50, cols: 1 },
  { y: 100, cols: 1 },
  { y: 50, cols: 1 },
  { y: 100, cols: 3 },
  { y: 50, cols: 1 },
  { y: 25, cols: 1 },
  { y: 75, cols: 1 },
  { y: 25, cols: 1 },
];

/**
 * Generates a combined SVG path with top wave + middle section + mirrored bottom wave.
 *
 * The path traces: left edge up → top wave (L→R) → right edge down →
 * bottom wave mirrored (R→L) → left edge up → close.
 */
export function generateCombinedPath({
  steps = DEFAULT_STEPS,
  totalWidth = 1450,
  waveHeight = 125,
  cornerRadius = 12.5,
  middleHeight = 200,
} = {}) {
  const totalCols = steps.reduce((sum, s) => sum + s.cols, 0);
  const colWidth = totalWidth / totalCols;
  const R = cornerRadius;
  const totalH = 2 * waveHeight + middleHeight;

  // x position where each step begins
  const stepStartX = [];
  let x = 0;
  for (const step of steps) {
    stepStartX.push(x);
    x += step.cols * colWidth;
  }

  const d = [];
  const firstY = steps[0].y;
  const lastY = steps[steps.length - 1].y;

  // ── TOP WAVE ──────────────────────────────────────────

  // Start at bottom-left of shape
  d.push(`M 0 ${waveHeight}`);

  // Left edge: go up, corner into first step
  d.push(`L 0 ${firstY + R}`);
  d.push(`Q 0 ${firstY} ${R} ${firstY}`);

  // Step transitions (left → right)
  for (let i = 0; i < steps.length - 1; i++) {
    const y1 = steps[i].y;
    const y2 = steps[i + 1].y;
    const xBound = stepStartX[i + 1];

    if (y1 === y2) {
      d.push(`L ${xBound} ${y1}`);
    } else {
      const sign = Math.sign(y2 - y1);
      d.push(`L ${xBound - R} ${y1}`);
      d.push(`Q ${xBound} ${y1} ${xBound} ${y1 + sign * R}`);
      if (Math.abs(y2 - y1) > 2 * R) {
        d.push(`L ${xBound} ${y2 - sign * R}`);
      }
      d.push(`Q ${xBound} ${y2} ${xBound + R} ${y2}`);
    }
  }

  // Right edge: corner from last step, go down
  d.push(`L ${totalWidth - R} ${lastY}`);
  d.push(`Q ${totalWidth} ${lastY} ${totalWidth} ${lastY + R}`);
  d.push(`L ${totalWidth} ${waveHeight}`);

  // ── MIDDLE ────────────────────────────────────────────

  if (middleHeight > 0) {
    d.push(`L ${totalWidth} ${waveHeight + middleHeight}`);
  }

  // ── BOTTOM WAVE (mirrored) ────────────────────────────

  // Right edge: go down, corner into mirrored last step
  const lastMirrorY = totalH - lastY;
  d.push(`L ${totalWidth} ${lastMirrorY - R}`);
  d.push(`Q ${totalWidth} ${lastMirrorY} ${totalWidth - R} ${lastMirrorY}`);

  // Step transitions (right → left, mirrored Y)
  for (let i = steps.length - 1; i > 0; i--) {
    const yCurr = totalH - steps[i].y;
    const yPrev = totalH - steps[i - 1].y;
    const xBound = stepStartX[i];

    if (yCurr === yPrev) {
      d.push(`L ${xBound} ${yCurr}`);
    } else {
      const sign = Math.sign(yPrev - yCurr);
      d.push(`L ${xBound + R} ${yCurr}`);
      d.push(`Q ${xBound} ${yCurr} ${xBound} ${yCurr + sign * R}`);
      if (Math.abs(yPrev - yCurr) > 2 * R) {
        d.push(`L ${xBound} ${yPrev - sign * R}`);
      }
      d.push(`Q ${xBound} ${yPrev} ${xBound - R} ${yPrev}`);
    }
  }

  // Left edge: corner from mirrored first step, go up
  const firstMirrorY = totalH - firstY;
  d.push(`L ${R} ${firstMirrorY}`);
  d.push(`Q 0 ${firstMirrorY} 0 ${firstMirrorY - R}`);
  d.push(`L 0 ${waveHeight + middleHeight}`);

  // Close path (Z draws line back to M start at 0,waveHeight)
  d.push('Z');

  return d.join(' ');
}
