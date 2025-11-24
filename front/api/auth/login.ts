// type loginRequest = {
//   email: string;
//   password: string;
// };

// type loginResponse = {
//   succsess: boolean;
//   data: {
//     user_id: number;
//     user_name: string;
//     token: string;
//   };
// };

// export const login = async (req: loginRequest): Promise<loginResponse> => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(req),
//       }
//     );

//     const data: loginResponse = await response.json();

//     if (!response.ok) {
//       return {
//         success: false,
//         message: data.message || "ログインに失敗しました",
//       };
//     }

//     return data;
//   } catch (error) {
//     console.error(error);
//     return {
//       success: false,
//       message: "ログインに失敗しました",
//     };
//   }
// };

export const login = async (req: { email: string; password: string }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(req),
      }
    );

    const text = await response.text();
    console.log("status:", response.status);
    console.log("raw body:", text);

    let data: any = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch (e) {
      console.warn("JSON じゃなかった:", e);
    }

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "ログインに失敗しました",
        data: null,
      };
    }

    return data;
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "ログインに失敗しました",
      data: null,
    };
  }
};
