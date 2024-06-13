import axios from 'axios'

export const fetchUserById = async (user_Id) => {
  try {
    const req = await axios.get(
      `https://server2-copiq6djm4es73a4js7g.onrender.com/user/${user_Id}`
    )
    return req
  } catch (error) {
    return error
  }
}
