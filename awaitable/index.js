window.awaitable = async function(promise) {
  const result = {
    error: undefined,
    data: undefined,
    hasError: false,
    hasData: false
  } 
  try {
    const data = await promise
    result.hasData = !!data 
    result.data = data
  } catch(error) {
    result.hasError = true 
    result.error = error
  }
  return result
} 

