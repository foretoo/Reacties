import { h, Fragment } from "preact"
import { useAgent } from "@app/ctx"

const SVGFilter = ({
  id = "filter",
  x = 0,
  y = 0,
  blur = 10,
  brightness = 1,
  intercept = 0,
  saturate = 1,
}) => {
  const { agent } = useAgent()
  const isChrome = agent.name === "Chrome"
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: 0, width: 0 }}>
      <filter id={id}
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

        {isChrome &&
        <>
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
        </>
        }

        <feOffset in={isChrome ? "displace" : "blur"}
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
//values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
