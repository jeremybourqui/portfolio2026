import React from 'react';

function SvgFilters() {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        <filter id="emboss" x="-25%" y="-25%" width="150%" height="150%">
          <feOffset in="SourceAlpha" dx="0.167" dy="0.833" result="off1"/>
          <feGaussianBlur stdDeviation="0.5" in="off1" result="blur1"/>
          <feSpecularLighting surfaceScale="1" specularConstant="0.9" specularExponent="15" in="blur1" result="spec1">
            <fePointLight x="-1000" y="-5000" z="300"/>
          </feSpecularLighting>
          <feComposite in="spec1" in2="SourceAlpha" operator="in" result="comp1"/>
          <feOffset in="SourceAlpha" dx="-0.167" dy="-0.833" result="off2"/>
          <feGaussianBlur stdDeviation="0.5" in="off2" result="blur2"/>
          <feSpecularLighting surfaceScale="1" specularConstant="1.8" specularExponent="8" in="blur2" result="spec2">
            <fePointLight x="100" y="5000" z="300"/>
          </feSpecularLighting>
          <feComposite in="spec2" in2="SourceAlpha" operator="in" result="comp2"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .85 0" in="comp2" result="matte"/>
          <feComposite k1="0" k2="0.8" k3="0.5" k4="0" in="comp1" in2="matte" operator="arithmetic" result="combined"/>
          <feMerge>
            <feMergeNode in="SourceGraphic"/>
            <feMergeNode in="combined"/>
          </feMerge>
        </filter>
        <filter id="inset-shadow">
          <feOffset dx="0" dy="0"/>
          <feGaussianBlur stdDeviation="1" result="offset-blur"/>
          <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
          <feFlood floodColor="black" floodOpacity="0.95" result="color"/>
          <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
          <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
        </filter>
      </defs>
    </svg>
  );
}

export default SvgFilters;
