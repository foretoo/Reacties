import { h } from 'preact'

const SVGFilter = ({
  x = 0,
  y = 0,
  blur = 10,
  brightness = 1,
  saturate = 1
}) => {
  return (
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
          <feFuncR type="linear" slope={brightness} intercept={0.1} />
          <feFuncG type="linear" slope={brightness} intercept={0.1} />
          <feFuncB type="linear" slope={brightness} intercept={0.1} />
        </feComponentTransfer>

        <feColorMatrix in="brightness"
          type="saturate"
          values={saturate}
          result="saturate" />

        <feGaussianBlur in="saturate"
          stdDeviation={blur}
          edgeMode="none"
          result="blur" />

        <feOffset in="blur"
          dx={x}
          dy={y}
          result="offset" />

        <feComposite in="SourceGraphic" in2="offset"
          operator="over"
          result="composite" />

      </filter>
    </svg>
  )
}

export default SVGFilter
