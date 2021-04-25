//quando o estado vem vazio, a gente tem que definir o estado inicial 

const INITIAL_STATE = [];

function listReducer (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value]
    default:
      return (state);
  }
}

export default listReducer;