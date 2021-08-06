/**
 * accessing local storage
 */
// eslint-disable-next-line import/prefer-default-export
export const storageEngine = {
  set: (key: any, data: any) => {
    if (typeof data === 'object') {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  },
  get: (key: any) => JSON.parse(localStorage.getItem(key)!),
  unset: (key: any) => {
    localStorage.removeItem(key);
  },
};

export const randomBGColor = () => {
  const bgColor = ['bg-red-300', 'bg-orange-300', 'bg-yellow-300', 'bg-green-300', 'bg-teal-300', 'bg-blue-300', 'bg-indigo-300', 'bg-purple-300', 'bg-pink-300'];
  const randomIndex = Math.floor(Math.random() * bgColor.length);
  const item = bgColor[randomIndex];
  return item;
};
