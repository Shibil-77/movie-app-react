export const LoginValidation = (signupData) => {
    const {email,password} = signupData
    if (!email) {
      return "Please enter your full name"
    }else if (!password) {
      return "Please enter your password"
    } else{
        return 'success'
    }
  }