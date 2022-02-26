import { h } from "preact"

const SVGFilter = ({
  x = 0,
  y = 0,
  blur = 10,
  brightness = 1,
  intercept = 0,
  saturate = 1,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ height: 0 }}>
    <filter id="filter"
      x="-50%"
      y="-50%"
      width="200%"
      height="200%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="linearRGB" >

      <feComponentTransfer in="SourceGraphic" result="brightness">
        <feFuncR type="linear" slope={brightness} intercept={intercept} />
        <feFuncG type="linear" slope={brightness} intercept={intercept} />
        <feFuncB type="linear" slope={brightness} intercept={intercept} />
      </feComponentTransfer>

      <feColorMatrix in="brightness"
        type="saturate"
        values={saturate}
        result="saturate" />

      <feGaussianBlur in="saturate"
        stdDeviation={blur}
        edgeMode="none"
        result="blur" />

      <feTurbulence
        type="fractalNoise"
        baseFrequency="2.222"
        numOctaves="1"
        result="noise"/>
      <feDisplacementMap in="blur" in2="noise"
        scale="25"
        xChannelSelector="R"
        yChannelSelector="B"
        result="displace"  />

      <feOffset in="displace"
        dx={x}
        dy={y}
        result="offset" />

      <feComposite in="SourceGraphic" in2="offset"
        operator="over"
        result="composite" />

    </filter>
  </svg>
)

export default SVGFilter
//values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
