import { h, Fragment } from "preact"
import { useEffect, useRef } from "preact/hooks"
import { useAgent } from "@app/ctx"
import gsap from "gsap"
import "./css/add-palette-btn.css"

const AddPaletteBtn = () => {

  const { actualTheme, agent } = useAgent()
  const rectRef   = useRef(null)
  const svgRef    = useRef(null)
  const shadowRef = useRef(null)

  const rects = []
  for (let y = 0; y <= 120; y += 40) {
    for (let x = 0; x <= 200; x += 50) {
      rects.push( <use href="#rect" x={x} y={y} /> )
    }
  }

  const isDark = actualTheme === "dark"
  const bg = isDark ? [ "#14141400", "#141414ff" ] : [ "#fff0", "#ffff" ]

  const isChrome = agent.name === "Chrome"
  const isSafari = agent.name === "Safari"
  const filter   = !isSafari ? "url(#shadow-filter)" : "none"

  const turn = { value: 0 }
  const gradient = (turn) => (
    `conic-gradient(
      from ${turn}turn,
      hsl(   0, 100%, 50% ),
      hsl(  60, 100%, 50% ),
      hsl( 120, 100%, 50% ),
      hsl( 180, 100%, 50% ),
      hsl( 240, 100%, 50% ),
      hsl( 300, 100%, 50% ),
      hsl(   0, 100%, 50% )
    )`
  )
  const tweenShadow = gsap.to(turn, {
    value: 1, ease: "none", duration: 2, repeat: -1, paused: true,
    onUpdate: () => shadowRef.current.style.background = gradient(turn.value)
  })

  useEffect(() => {
    gsap.set(rectRef.current, { scaleX: 0.84, scaleY: 0.8, transformOrigin: "center" })
    gsap.set(svgRef.current, { backgroundColor: bg[0] })
    return () => tweenShadow.kill()
  }, [ actualTheme ])

  const handleMouseEnter = () => {
    gsap.to(rectRef.current, {
      attr: { rx: 0, fill: isSafari ? "#444" : bg[1] },
      scale: 1, duration: 0.3
    })
    gsap.to(svgRef.current, { scale: 1.05, ease: "power1.in", duration: 0.3 })
    gsap.to(svgRef.current, {
      backgroundColor: isSafari ? "#444" : bg[1], ease: "power1.in", duration: 0.5
    })
    if (!isSafari) {
      gsap.to(shadowRef.current, { opacity: 1, ease: "power1.in", duration: 0.5 })
      tweenShadow.play()
    }
  }
  const handleMouseLeave = () => {
    gsap.to(rectRef.current, {
      attr: { rx: 5, fill: isDark ? "#444" : "#fff" },
      scaleX: 0.84, scaleY: 0.8, ease: "power1.in", duration: 0.3
    })
    gsap.to(svgRef.current, { scale: 1, duration: 0.3 })
    gsap.to(svgRef.current, { backgroundColor: bg[0], duration: 0.1 })
    if (!isSafari) {
      gsap.to(shadowRef.current, { opacity: 0, duration: 0.3 })
      tweenShadow.pause()
    }
  }

  return (
    <>
    <div className="add-palette-shadow-container"
      style={{ filter }}>
      <div ref={shadowRef}
        className="add-palette-shadow"
        style={{
          background: gradient(turn.value),
          opacity: 0,
        }}>  
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: 0, width: 0 }}>
        <filter id={"shadow-filter"}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="linearRGB" >

          <feGaussianBlur in="SourceGraphic"
            stdDeviation="20"
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

        </filter>
      </svg>
    </div>
    <div className="add-palette-btn-container">
      <svg ref={svgRef}
        className="add-palette-btn-bg"
        width="250"
        height="160"
        viewBox="0 0 250 160"
        xmlns="http://www.w3.org/2000/svg" >

        <symbol id="rect"
          width="50"
          height="40" >
          <rect ref={rectRef}
            fill={isDark ? "#444" : "#fff"}
            x="0"
            y="0"
            width="50"
            height="40"
            rx="5" />
        </symbol>

        {rects}

      </svg>
      <input className="add-palette-btn"
        tabIndex={-1}
        type="button"
        value="CREATE PALETTE"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} />
    </div>
    </>
  )
}

export default AddPaletteBtn
