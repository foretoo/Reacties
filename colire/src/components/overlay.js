import { h } from "preact"
import { gsap } from "gsap"
import { useLayoutEffect, useRef } from "preact/hooks"
import "./css/overlay.css"

const Overlay = ({ code, lumClass, force }) => {

  const ref = useRef(null)
  const mounted = useRef(false)
  const tl = gsap.timeline({ defaults: { duration: 0.5 }})

  useLayoutEffect(() => {
    if (mounted.current) {
      tl.set(ref.current, { background: code, pointerEvents: "all" })
      tl.to(ref.current, { opacity: "1" })
      tl.to(ref.current, { opacity: "0" }, "+=1")
      tl.set(ref.current, { pointerEvents: "none" })
    }
    mounted.current = true
    return () => tl.kill()
  }, [ force ])

  return (
    <section
      ref={ref}
      className={"overlay" + lumClass} >
      <h1>Copied</h1>
      <span>{code}</span>
    </section>
  )
}

export default Overlay
