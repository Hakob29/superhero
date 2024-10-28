// login call to api
export const loginAPI = async (inputData: {
  email: string | undefined;
  password: string | undefined;
  token: Boolean;
}) => {
  try {
    const response = await fetch(process.env.REACT_APP_LOG_IN_KEY!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputData.email,
        password: inputData.password,
        token: inputData.token,
      }),
    });

    const result = await response.json();
    if (result.error) {
      throw new Error(result.error.message);
    }

    localStorage.setItem("token", result.idToken);
    localStorage.setItem(
      "user",
      JSON.stringify({
        displayName: result.displayName,
        email: result.email,
        idToken: result.idToken,
        kind: result.kind,
        localId: result.localId,
        registered: result.registered,
      })
    );
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};

// sign-up call to api
export const signupAPI = async (inputData: {
  email: string | undefined;
  password: string | undefined;
  token: Boolean;
}) => {
  try {
    const response = await fetch(process.env.REACT_APP_SIGN_UP_KEY!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputData.email,
        password: inputData.password,
        token: inputData.token,
      }),
    });

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }

    localStorage.setItem("token", data.idToken);
    localStorage.setItem(
      "user",
      JSON.stringify({
        displayName: data.displayName,
        email: data.email,
        idToken: data.idToken,
        kind: data.kind,
        localId: data.localId,
        registered: data.registered,
      })
    );
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
