
export const select = payload => {

  return {
    type: "SELECT_RANDOM_PRODUCT",
     payload : payload
  }
}


export const submit = payload => ({
  type: "SUBMIT_ALL_PRODUCT",
  payload
});


