export function writeToLocalStorage(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  }
  catch (error) {
    console.error('Error writing to localStorage', error)
  }
}

export function readFromLocalStorage(key: string): any {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }
  catch (error) {
    console.error('Error reading from localStorage', error)
    return null
  }
}
