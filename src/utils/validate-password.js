export const validatePassword = (pwdValue, confirmPwd) => {
  //ensure inputs are not empty
  if (!pwdValue || pwdValue === '') return 'pwdvalue cannot be empty'
  if (!confirmPwd || confirmPwd === '') return 'confirmPwd cannot be empty'

  //check length
  if (pwdValue.length < 6) return 'password should contain atleast 6 char'
  //check if passwords match
  if (pwdValue !== confirmPwd) return 'password dont match'
  //if all is good return success
  return 'ok'
}
