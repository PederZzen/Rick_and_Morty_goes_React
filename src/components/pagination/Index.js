const reducer = (state, action) => {
  switch (action.type) {
    case "previous":
      if (state.page > 1) {
        return { page: state.page - 1 }
      } else {
        return { page: state.page }
      }
    case "next":
      return { page: state.page + 1 }
    default:
      return state.page
  }
}

export default reducer