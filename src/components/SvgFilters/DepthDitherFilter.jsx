import React from 'react';

function DepthDitherFilter({ id = 'depthDither' }) {
  // Outer shadow: angle=229°, dist=10, depth=2.7
  const outerAngle = 229 * Math.PI / 180;
  const outerDx = (-10 * 2.7 * Math.cos(outerAngle)).toFixed(1);
  const outerDy = (-10 * 2.7 * Math.sin(outerAngle)).toFixed(1);

  // Inner shadow: angle=216°, dist=2, depth=3
  const innerAngle = 216 * Math.PI / 180;
  const innerDist = 2 * 3;
  const darkDx = (innerDist * Math.cos(innerAngle)).toFixed(1);
  const darkDy = (innerDist * Math.sin(innerAngle)).toFixed(1);
  const lightDx = (-innerDist * 0.7 * Math.cos(innerAngle)).toFixed(1);
  const lightDy = (-innerDist * 0.7 * Math.sin(innerAngle)).toFixed(1);

  // Gradient geometry: cx=28%, cy=31%, rx=50%, ry=65%
  const cx = 0.28;
  const cy = 0.31;
  const r = 0.65;
  const scaleX = (50 / 65).toFixed(4);
  const gradTransform = `translate(${cx},${cy}) scale(${scaleX},1) translate(${-cx},${-cy})`;

  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        {/* Depth shadow filter */}
        <filter
          id={id}
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
          colorInterpolationFilters="sRGB"
        >
          {/* Outer shadow */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="19.5" result="outerBlur" />
          <feOffset in="outerBlur" dx={outerDx} dy={outerDy} result="outerOffset" />
          <feFlood floodColor="#000" floodOpacity="0.26" result="outerColor" />
          <feComposite in="outerColor" in2="outerOffset" operator="in" result="outerDrop" />

          {/* Inner dark shadow */}
          <feComponentTransfer in="SourceAlpha" result="inv">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feOffset dx={darkDx} dy={darkDy} in="inv" result="invOff" />
          <feGaussianBlur in="invOff" stdDeviation="4.5" result="invBlur" />
          <feComposite in="invBlur" in2="SourceAlpha" operator="in" result="innerDark" />
          <feFlood floodColor="#000" floodOpacity="0.43" result="dkColor" />
          <feComposite in="dkColor" in2="innerDark" operator="in" result="innerDkShadow" />

          {/* Inner light highlight */}
          <feComponentTransfer in="SourceAlpha" result="inv2">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feOffset dx={lightDx} dy={lightDy} in="inv2" result="invOff2" />
          <feGaussianBlur in="invOff2" stdDeviation="5" result="invBlur2" />
          <feComposite in="invBlur2" in2="SourceAlpha" operator="in" result="innerLight" />
          <feFlood floodColor="#fff" floodOpacity="0.03" result="ltColor" />
          <feComposite in="ltColor" in2="innerLight" operator="in" result="innerLtShadow" />

          {/* Merge layers */}
          <feMerge>
            <feMergeNode in="outerDrop" />
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="innerDkShadow" />
            <feMergeNode in="innerLtShadow" />
          </feMerge>
        </filter>

        {/* Noise filters (per blob) */}
        <filter id="noiseGrey" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feComponentTransfer in="noise" result="thresholded">
            <feFuncA type="discrete" tableValues="0 0 0 0 1 1 1 1" />
          </feComponentTransfer>
          <feFlood floodColor="#333745" result="color" />
          <feComposite in="color" in2="thresholded" operator="in" result="noiseTex" />
          <feComposite in="noiseTex" in2="SourceGraphic" operator="in" result="clippedNoise" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="clippedNoise" />
          </feMerge>
        </filter>

        <filter id="noiseDk" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feComponentTransfer in="noise" result="thresholded">
            <feFuncA type="discrete" tableValues="0 0 0 0 1 1 1 1" />
          </feComponentTransfer>
          <feFlood floodColor="#156e89" result="color" />
          <feComposite in="color" in2="thresholded" operator="in" result="noiseTex" />
          <feComposite in="noiseTex" in2="SourceGraphic" operator="in" result="clippedNoise" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="clippedNoise" />
          </feMerge>
        </filter>

        <filter id="noiseMain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="5" stitchTiles="stitch" result="noise" />
          <feComponentTransfer in="noise" result="thresholded">
            <feFuncA type="discrete" tableValues="0 0 0 0 1 1 1 1" />
          </feComponentTransfer>
          <feFlood floodColor="#90cee0" result="color" />
          <feComposite in="color" in2="thresholded" operator="in" result="noiseTex" />
          <feComposite in="noiseTex" in2="SourceGraphic" operator="in" result="clippedNoise" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="clippedNoise" />
          </feMerge>
        </filter>

        {/* Radial gradients (elliptical) */}
        <radialGradient id="gradGrey" cx={cx} cy={cy} r={r} fx={cx} fy={cy}
          gradientUnits="objectBoundingBox" gradientTransform={gradTransform}>
          <stop offset="0%" stopColor="#4a4f60" />
          <stop offset="100%" stopColor="#333745" />
        </radialGradient>

        <radialGradient id="gradDk" cx={cx} cy={cy} r={r} fx={cx} fy={cy}
          gradientUnits="objectBoundingBox" gradientTransform={gradTransform}>
          <stop offset="0%" stopColor="#1f8fae" />
          <stop offset="100%" stopColor="#156e89" />
        </radialGradient>

        <radialGradient id="gradMain" cx={cx} cy={cy} r={r} fx={cx} fy={cy}
          gradientUnits="objectBoundingBox" gradientTransform={gradTransform}>
          <stop offset="0%" stopColor="#cfebf3" />
          <stop offset="100%" stopColor="#90cee0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default DepthDitherFilter;
