import { ADD_POKEMON, DELETE_POKEMON } from "../constants"

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: "",
  data: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case GET_POKELIST_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     data:
    //       state.data.length <= 0 ||
    //       state.pagination.currentPage < action.payload.page
    //         ? state.data.concat(action.payload.data)
    //         : state.data,
    //     pagination: {
    //       ...state.pagination,
    //       hasNext: action.payload.hasNext,
    //       currentPage: action.payload.page,
    //       total: action.payload.total,
    //     },
    //   }
    // case GET_POKELIST_FAILED:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     hasError: true,
    //     errorMessage: action.payload.errorMessage,
    //   }
    default:
      return state
  }
}
