type registerRequest = {
  name: string;
  email: string;
  password: string;
};

type registerResponse = {
  success: boolean;
  message?: string;
  data?: {
    user_id: number;
    user_name: string;
    token?: string;
  };
  errors?: Record<string, string[]>;
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

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "登録に失敗しました",
        errors: data.errors,
      };
    }

    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
};
