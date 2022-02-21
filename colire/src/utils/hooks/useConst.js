import { useRef } from "preact/hooks"

const useConst = (ref) => useRef(ref).current

export default useConst