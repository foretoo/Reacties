import { h } from "preact"
import { gsap } from "gsap"
import { useEffect, useRef } from "preact/hooks"
import { useConst, useCtx } from "@utils/hooks"
import "./css/overlay.css"

const Overlay = () => {

  const { state: { overlay }} = useCtx()
  const ref = useRef(null)
  const mounted = useRef(false)
  const tl = useConst(gsap.timeline({ defaults: { duration: 0.5 }}))

  useEffect(() => {
    if (mounted.current) {
      tl.to(ref.current, { opacity: "1", pointerEvents: "all" })
      tl.to(ref.current, { opacity: "0" }, "+=1")
      tl.set(ref.current, { pointerEvents: "none" })
    }
    mounted.current = true
    return () => tl.kill()
  }, [ overlay ])

  return (
    <section
      ref={ref}
      className={"overlay" + overlay.lumClass}
      style={{ background: overlay.code }} >
      <h1>Copied</h1>
      <span>{overlay.code}</span>
    </section>
  )
}

export default Overlay
