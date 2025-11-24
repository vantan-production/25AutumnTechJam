type registerRequest = {
  name: String;
  email: String;
  password: String;
};
type registerResponse = {
  sucsess: Boolean;
  data: {
    user_id: Number;
    user_name: String;
  };
};

export const register = async (
  req: registerRequest
): Promise<registerResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      }
    );
  } catch (error) {
    console.error(error);
  }
};
