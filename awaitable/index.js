async function awaitable(promise) {
  const result = {
    error: undefined,
    data: undefined,
    hasError: false,
    hasData: false
  } 
  try {
    const data = await promise
    result.hasData = true 
    result.data = data
  } catch(error) {
    result.hasError = true 
    result.error = error
  }
  return result
}
