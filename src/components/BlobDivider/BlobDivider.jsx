import { useId } from 'react';
import styles from './BlobDivider.module.css';

function BlobDivider({
  color = '#333745',
  colorLight = '#4a4f60',
  orientation = 'top',
  backgroundColor = 'var(--color-background)',
}) {
  const uid = useId().replace(/:/g, '');
  const noiseId = `noise${uid}`;
  const gradId = `grad${uid}`;
  const isFlipped = orientation === 'bottom';

  const cx = 0.28;
  const cy = 0.31;
  const r = 0.65;
  const scaleX = (50 / 65).toFixed(4);
  const gradTransform = `translate(${cx},${cy}) scale(${scaleX},1) translate(${-cx},${-cy})`;

  return (
    <svg
      className={`${styles.blobDivider} ${isFlipped ? styles.flipped : ''}`}
      style={{ backgroundColor }}
      width="1450"
      height="125"
      viewBox="0 0 1450 125"
      xmlns="http://www.w3.org/2000/svg"
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

      <g transform={isFlipped ? 'rotate(180 725 62.5), translate(0, 5)' : ''}
         filter="url(#depthDither)">
        <path
          d="M 1015 37.5 L 1015 37.5 Q 1015 25 1027.5 25 L 1147.5 25 Q 1160 25 1160 37.5 L 1160 37.5 Q 1160 50 1160 62.5 L 1160 62.5 Q 1160 75 1172.5 75 L 1292.5 75 Q 1305 75 1305 62.5 L 1305 62.5 Q 1305 50 1305 37.5 L 1305 37.5 Q 1305 25 1317.5 25 L 1437.5 25 Q 1450 25 1450 37.5 L 1450 37.5 Q 1450 50 1450 62.5 L 1450 62.5 Q 1450 75 1450 87.5 L 1450 87.5 Q 1450 100 1450 112.5 L 1450 125 L 1325 125 Q 1305 125 1285 125 L 1180 125 Q 1160 125 1140 125 L 1035 125 Q 1015 125 995 125 L 890 125 Q 870 125 850 125 L 745 125 Q 725 125 705 125 L 600 125 Q 580 125 560 125 L 455 125 Q 435 125 415 125 L 310 125 Q 290 125 270 125 L 165 125 Q 145 125 125 125 L 0 125 L 0 112.5 Q 0 100 0 87.5 L 0 87.5 Q 0 75 0 62.5 L 0 62.5 Q 0 50 12.5 50 L 132.5 50 Q 145 50 145 62.5 L 145 62.5 Q 145 75 145 87.5 L 145 87.5 Q 145 100 157.5 100 L 277.5 100 Q 290 100 290 87.5 L 290 87.5 Q 290 75 290 62.5 L 290 62.5 Q 290 50 302.5 50 L 422.5 50 Q 435 50 435 62.5 L 435 62.5 Q 435 75 435 87.5 L 435 87.5 Q 435 100 447.5 100 L 560 100 Q 580 100 600 100 L 705 100 Q 725 100 745 100 L 857.5 100 Q 870 100 870 87.5 L 870 87.5 Q 870 75 870 62.5 L 870 62.5 Q 870 50 882.5 50 L 1002.5 50 Q 1015 50 1015 37.5 Z"
          fill={`url(#${gradId})`}
          filter={`url(#${noiseId})`}
        />
      </g>
    </svg>
  );
}

export default BlobDivider;
