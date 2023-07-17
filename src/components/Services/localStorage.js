const KEY = 'contacts';

export function setLocalStorage(value) {
  try {
    const firstState = JSON.stringify(value);
    localStorage.setItem(KEY, firstState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

export function getLocalStorage() {
  try {
    const firstState = localStorage.getItem(KEY);
    return firstState === null ? undefined : JSON.parse(firstState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

export function deleteLocalStorage() {
  try {
    localStorage.removeItem(KEY);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}