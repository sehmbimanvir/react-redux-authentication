export const loginRules = {
  email: [
    { required: true, message: 'Email is required' },
    { email: true, message: 'Invalid Email' }
  ],
  password: [
    { required: true, message: 'Password is required' }
  ]
}

export const registerationRules = {
  name: [{ required: true, message: 'Name is required.' }],
  email: [
    { required: true, message: 'Email is required' },
    { email: true, message: 'Invalid Email' }
  ],
  password: [{ required: true, message: 'Password is required' }],
  confirm_password: [
    { required: true, message: 'Password Confirmation is required' }
  ]
}