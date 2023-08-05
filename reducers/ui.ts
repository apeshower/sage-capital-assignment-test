import { uiTypes } from "../types"

const INITIAL_STATE: {
  openModal: boolean
  selectedData: any
} = {
  openModal: false,
  selectedData: []
}

const ui = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case uiTypes.OPEN_MODAL:
      return { ...state, openModal: true }
    case uiTypes.CLOSE_MODAL:
      return { ...state, openModal: false }
    case uiTypes.SET_SELECTED_DATA:
      return { ...state, selectedData: action.payload }
    default:
      return state
  }
}

export default ui