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
    },
    hidden: false,
    valid:  {
      name:     true,
      color:    true,
      warnText: "",
    },
  },
}

export default initialState
