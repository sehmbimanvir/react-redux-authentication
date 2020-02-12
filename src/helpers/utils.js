export const getCurrentTimestamp = () => parseInt(Date.now() / 1000)

export const validateFields = form => {
  return new Promise((resolve, reject) => {
    form.validateFields((err, values) => {
      if (err)
        return reject(err)

      resolve(values)
    })
  })
}