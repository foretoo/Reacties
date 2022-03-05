import { seedColors } from "@utils/constants"

const initialState = {
  editor: {
    toEdit:   {},
    toCreate: {
      colors: seedColors[0].colors,
      name:    "",
      emoji:   "🖖",
      color:   {
        name:  "",
        color: "#ffffff",
      },
      valid:  {
        name:     true,
        color:    true,
        warnText: "",
      },
    },
    hidden: false,
  },
}

export default initialState
