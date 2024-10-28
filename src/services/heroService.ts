//hero call to api
const getHeroAPI = async (inputData: string) => {
  try {
    const response = await fetch(
      `/api/${process.env.REACT_APP_ACCESS_TOKEN}/search/${inputData}`
    );

    const result = await response.json();

    if (result.response === "error") {
      throw new Error(result.error);
    }
    localStorage.setItem("response", JSON.stringify(result));
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};

export default getHeroAPI;
