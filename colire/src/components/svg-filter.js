import { h } from 'preact'

const SVGFilter = () => {
  const blur = 20
  const saturate = 5
  const brightness = 1
  const contrast = 0.1
  const offset = { x: 0, y: 25 }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <filter id="filter"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        color-interpolation-filters="linearRGB"
      >
        <feComponentTransfer in="SourceGraphic" result="brightness">
          <feFuncR type="linear" slope={brightness} intercept={contrast} />
          <feFuncG type="linear" slope={brightness} intercept={contrast} />
          <feFuncB type="linear" slope={brightness} intercept={contrast} />
        </feComponentTransfer>
        {/* <feColorMatrix in="brightness"
          type="saturate"
          values={saturate}
          result="saturate" /> */}
        <feGaussianBlur in="brightness"
          stdDeviation={blur}
          edgeMode="none"
          result="blur" />
        <feOffset in="blur"
          dx={offset.x}
          dy={offset.y}
          result="offset" />
        <feComposite in="SourceGraphic" in2="offset"
          operator="over"
          result="composite" />
      </filter>
    </svg>
  )
}

export default SVGFilter
