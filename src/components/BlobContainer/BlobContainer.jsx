import { useId } from 'react';
import { generateCombinedPath } from './generateBlobPath';
import styles from '../BlobDivider/BlobDivider.module.css';

function BlobContainer({
  color = '#90cee0',
  colorLight = '#cfebf3',
  middleHeight = 200,
  backgroundColor = 'var(--color-background)',
}) {
  const uid = useId().replace(/:/g, '');
  const noiseId = `noise${uid}`;
  const gradId = `grad${uid}`;

  const waveHeight = 125;
  const totalWidth = 1450;
  const totalH = 2 * waveHeight + middleHeight;

  const pathD = generateCombinedPath({
    totalWidth,
    waveHeight,
    middleHeight,
  });

  const cx = 0.28;
  const cy = 0.31;
  const r = 0.65;
  const scaleX = (50 / 65).toFixed(4);
  const gradTransform = `translate(${cx},${cy}) scale(${scaleX},1) translate(${-cx},${-cy})`;

  return (
    <svg
      className={styles.blobDivider}
      style={{ backgroundColor }}
      viewBox={`0 0 ${totalWidth} ${totalH}`}
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <defs>
        <filter id={noiseId} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feComponentTransfer in="noise" result="thresholded">
            <feFuncA type="discrete" tableValues="0 0 0 0 1 1 1 1" />
          </feComponentTransfer>
          <feFlood floodColor={color} result="color" />
          <feComposite in="color" in2="thresholded" operator="in" result="noiseTex" />
          <feComposite in="noiseTex" in2="SourceGraphic" operator="in" result="clippedNoise" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="clippedNoise" />
          </feMerge>
        </filter>

        <radialGradient id={gradId} cx={cx} cy={cy} r={r} fx={cx} fy={cy}
          gradientUnits="objectBoundingBox" gradientTransform={gradTransform}>
          <stop offset="0%" stopColor={colorLight} />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
      </defs>

      <g filter="url(#depthDither)">
        <path
          d={pathD}
          fill={`url(#${gradId})`}
          filter={`url(#${noiseId})`}
        />
      </g>
    </svg>
  );
}

export default BlobContainer;
