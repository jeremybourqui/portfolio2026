import React from 'react';

function DepthDitherFilter({
  id = 'depthDither',
  ditherIntensity = 0.24,
  lightAngle = 41,
  lightDist = 16,
  outerBlur = 17,
  outerOpacity = 0.28,
  innerDarkBlur = 4.5,
  innerDarkOpacity = 0.42,
  innerLightBlur = 1,
  innerLightOpacity = 0.39,
}) {
  const a = (lightAngle * Math.PI) / 180;
  const outerDx = lightDist * Math.cos(a);
  const outerDy = lightDist * Math.sin(a);
  const innerDist = lightDist * 0.35;
  // Inner dark: opposite to light (raised look)
  const darkDx = -innerDist * Math.cos(a);
  const darkDy = -innerDist * Math.sin(a);
  // Inner light: toward light (raised look)
  const lightDx = innerDist * 0.7 * Math.cos(a);
  const lightDy = innerDist * 0.7 * Math.sin(a);

  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        <filter
          id={id}
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
          colorInterpolationFilters="sRGB"
        >
          {/* Outer shadow */}
          <feGaussianBlur in="SourceAlpha" stdDeviation={outerBlur} result="outerBlur" />
          <feOffset in="outerBlur" dx={outerDx.toFixed(1)} dy={outerDy.toFixed(1)} result="outerOffset" />
          <feFlood floodColor="#000" floodOpacity={outerOpacity} result="outerColor" />
          <feComposite in="outerColor" in2="outerOffset" operator="in" result="outerDrop" />

          {/* Shadow dither */}
          <feTurbulence type="turbulence" baseFrequency="2.2" numOctaves="1" seed="7" result="shNoise" />
          <feComponentTransfer in="shNoise" result="shDither">
            <feFuncA type="discrete" tableValues="0 0.3 0.8 1 1 0.8 0.3 0" />
          </feComponentTransfer>
          <feComposite in="outerDrop" in2="shDither" operator="in" result="ditheredOuterDrop" />

          {/* Inner dark shadow */}
          <feComponentTransfer in="SourceAlpha" result="inv">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feOffset dx={darkDx.toFixed(1)} dy={darkDy.toFixed(1)} in="inv" result="invOff" />
          <feGaussianBlur in="invOff" stdDeviation={innerDarkBlur} result="invBlur" />
          <feComposite in="invBlur" in2="SourceAlpha" operator="in" result="innerDark" />
          <feFlood floodColor="#000" floodOpacity={innerDarkOpacity} result="dkColor" />
          <feComposite in="dkColor" in2="innerDark" operator="in" result="innerDkShadow" />

          {/* Inner light highlight */}
          <feComponentTransfer in="SourceAlpha" result="inv2">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feOffset dx={lightDx.toFixed(1)} dy={lightDy.toFixed(1)} in="inv2" result="invOff2" />
          <feGaussianBlur in="invOff2" stdDeviation={innerLightBlur} result="invBlur2" />
          <feComposite in="invBlur2" in2="SourceAlpha" operator="in" result="innerLight" />
          <feFlood floodColor="#fff" floodOpacity={innerLightOpacity} result="ltColor" />
          <feComposite in="ltColor" in2="innerLight" operator="in" result="innerLtShadow" />

          {/* Surface dither */}
          <feTurbulence type="turbulence" baseFrequency="1.8" numOctaves="1" seed="2" result="surfNoise" />
          <feComponentTransfer in="surfNoise" result="surfDither">
            <feFuncR type="discrete" tableValues="0 0 0 1 1" />
            <feFuncG type="discrete" tableValues="0 0 0 1 1" />
            <feFuncB type="discrete" tableValues="0 0 0 1 1" />
            <feFuncA type="linear" slope={ditherIntensity} intercept="0" />
          </feComponentTransfer>
          <feComposite in="surfDither" in2="SourceAlpha" operator="in" result="clippedDither" />

          {/* Merge layers */}
          <feMerge>
            <feMergeNode in="ditheredOuterDrop" />
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="innerDkShadow" />
            <feMergeNode in="innerLtShadow" />
            <feMergeNode in="clippedDither" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

export default DepthDitherFilter;
