import { h } from "preact"
import { gsap } from "gsap"
import { useContext, useEffect, useRef } from "preact/hooks"
import { Context } from "@app"
import "./css/snackbar.css"

const Snackbar = () => {

  const { state: { format }} = useContext(Context)
  const ref = useRef(null)
  const mounted = useRef(false)
  const tl = gsap.timeline({ defaults: { duration: 0.5 }})

  useEffect(() => {
    if (mounted.current) {
      tl.to(ref.current, { top: "0px" })
      tl.to(ref.current, { top: "-60px" }, "+=1")
    }
    mounted.current = true
    return () => tl.kill()
  }, [ format ])

  return (
    <div ref={ref} className="snackbar">
      Format changed to {format}
    </div>
  )
}

export default Snackbar
