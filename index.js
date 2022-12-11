//State
const initialCounterState = {
  count: 0,
}

const initialUsersState = {
  users: [
    {
      name: "Ujjal Roy"
    }
  ]
}

//Action -Object -Type or Payload

const incrementCounter = () => {
  return {
    type: "INCREMENT"
  }
} 

const decrementCounter = () => {
  return {
    type: "DECREMENT"
  }
}

const addUser = () => {
  return {
    type: "ADD_USER",
    payload: { name: 'Tamim'}
  }
}

