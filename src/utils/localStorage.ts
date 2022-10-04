const getIsAuthenticatedFromLocalStorage = (): boolean => {
  const authenticationValue = localStorage.getItem('authentication')

  return authenticationValue ? JSON.parse(authenticationValue) : false
}

const setIsAuthenticatedToLocalStorage = (authenticationValue: boolean): void => {
  localStorage.setItem('authentication', JSON.stringify(authenticationValue))
}

export { getIsAuthenticatedFromLocalStorage, setIsAuthenticatedToLocalStorage }
