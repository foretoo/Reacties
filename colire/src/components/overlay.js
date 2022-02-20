import { h } from "preact"
import { useContext, useEffect, useRef } from "preact/hooks"
import { Context } from "@app"
import "./css/overlay.css"
import { gsap } from "gsap"

const Overlay = () => {

  const { state: { overlay: { lumClass, code }}} = useContext(Context)
  const ref = useRef(null)
  const mounted = useRef(false)
  const tl = gsap.timeline({ defaults: { duration: 0.5 }})

  useEffect(() => {
    if (mounted.current) {
      tl.to(ref.current, { opacity: "1" })
      tl.to(ref.current, { opacity: "0" }, "+=1")
    }
    mounted.current = true
  }, [ code ])

  return (
    <section
      ref={ref}
      className={"overlay" + lumClass}
      style={{ background: code }} >
      <h1>Copied</h1>
      <span>{code}</span>
    </section>
  )
}

export default Overlay
