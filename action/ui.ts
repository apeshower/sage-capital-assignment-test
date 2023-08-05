import { uiTypes } from "../types"

export const uiActions = {
  openModal,
  closeModal,
  setSelectedData,
}

function openModal() {
  return {
    type: uiTypes.OPEN_MODAL,
  }
}

function closeModal() {
  return {
    type: uiTypes.CLOSE_MODAL,
  }
}

function setSelectedData(payload: any) {
  return {
    type: uiTypes.SET_SELECTED_DATA,
    payload,
  }
}