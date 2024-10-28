//get hero data from local storage
export const getHeroStorageFromLocalStorage = () => {
  const storedResponse = localStorage.getItem("response");
  return storedResponse ? JSON.parse(storedResponse) : null;
};
