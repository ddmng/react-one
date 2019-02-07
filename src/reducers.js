import { createReducer } from 'redux-starter-kit'

const initialState = {
    name: "",
    filter: "",
    list: [{
      name: "fuffi",
      id: 1,
      media: 'media',
      location: 'Italy',
      breed: 'doberman',
      animal: 'dog'
    }, {
      name: "lillo",
      id: 2,
      media: 'media',
      location: 'Italy',
      breed: 'siamese',
      animal: 'cat'
    }]
  };
  
const reducer = createReducer(initialState, {
    "UPDATE_NAME" : (state, action) => {
        state.name = action.payload.name
    },
})

export default reducer;