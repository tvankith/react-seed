/**
 * accessing local storage
 */
// eslint-disable-next-line import/prefer-default-export
export const storageEngine = {
  set: (key: any, data: any) => {
    if (typeof data === 'object') {
      return localStorage.setItem(key, JSON.stringify(data));
    }
    return localStorage.setItem(key, data);
  },
  get: (key: any) => JSON.parse(localStorage.getItem(key)!),
  unset: (key: any) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
};
