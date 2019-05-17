export const savePoint = (selectedPoint) => {
  return {
    type: 'SAVE_POINT',
    payload: selectedPoint,
  };
};

export const addPoint = (selectedPoint) => {
  return {
    type: 'ADD_POINT',
    payload: selectedPoint,
  };
};

export const changeModal = (show) => {
  return {
    type: 'CHANGE_MODAL',
    payload: show,
  };
};

export const showPoint = (point) => {
  return {
    type: 'SHOW_POINT',
    payload: point,
  };
};
export const hidePoint = (point) => {
  return {
    type: 'HIDE_POINT',
    payload: point,
  };
};

export const deletePoint = (id) => {
  return {
    type: 'DELETE_POINT',
    payload: id,
  };
};

export const showConfirmation = (show) => {
  return {
    type: 'SHOW_CONFIRMATOIN',
    payload: show,
  };
};

export const changeVisible = (visible) => {
  return {
    type: 'CHANGE_VISIBLE',
    payload: visible,
  };
};
