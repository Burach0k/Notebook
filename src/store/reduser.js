export const initialState = {
  points: [],
  selectedPoint: { lat: 53.9014392, lng: 27.4755107 },
  show: false,
  confirmation: false,
  deleteId: '',
  marks: [],
  buttonVisible: 'add-button-visible',
  lastTouch:{ lat: 53.9014392, lng: 27.4755107 },
};

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SAVE_POINT':
      return { ...state, selectedPoint: payload };

    case 'ADD_POINT':
      return { ...state, points: [...state.points, payload] };

    case 'CHANGE_MODAL':
      return { ...state, show: payload };

    case 'SHOW_POINT':
      return { ...state, lastTouch:{ lat: payload.lat, lng: payload.lng }, marks: [...state.marks, payload] };

    case 'SHOW_CONFIRMATOIN':
      return { ...state, confirmation: payload.confirmation, deleteId: payload.id };

    case 'CHANGE_VISIBLE':
      return { ...state, buttonVisible: payload };

    case 'DELETE_POINT':
      const points = state.points;
      const pointIndex = points.findIndex((point) => point.id === payload);
      points.splice(pointIndex, 1);
      return { ...state, points: [...points] };

    case 'HIDE_POINT':
      const marks = state.marks;
      const index = marks.findIndex((mark) => mark.id === payload);
      marks.splice(index, 1);
      return { ...state, marks: [...marks] };

    default:
      return state;
  }
}
