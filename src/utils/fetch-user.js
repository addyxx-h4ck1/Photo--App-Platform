import axios from 'axios'

export const fetchUserById = async (user_Id) => {
  try {
    const req = await axios.get(`http://localhost:3002/user/${user_Id}`)
    return req
  } catch (error) {
    return error
  }
}
