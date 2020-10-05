import { h } from 'preact'

const SVGFilter = () => {
  const blur = 15
  const brightness = 1
  const contrast = 0
  const offset = { x: 0, y: 25 }
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <filter id="filter"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        color-interpolation-filters="linearRGB"
      >
        <feGaussianBlur in="SourceGraphic"
          stdDeviation={blur}
          edgeMode="none"
          result="blur" />
        <feComponentTransfer in="blur" result="brightness">
          <feFuncR type="linear" slope={brightness} intercept={contrast} />
          <feFuncG type="linear" slope={brightness} intercept={contrast} />
          <feFuncB type="linear" slope={brightness} intercept={contrast} />
        </feComponentTransfer>
        <feOffset in="brightness"
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
