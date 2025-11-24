import { type shopRequest } from "./shop";

type ShopInfoResponse = {
  success: boolean,
  data?: shopRequest,
  message?: string
}

export async function ShopInfo(id: number): Promise<ShopInfoResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/shop/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return {
      success: result.success,
      data: result.data,
    };
  } catch (error) {
    console.error("Error fetching shop by id:", error);
    return {
      success: false,
      message: "情報の取得に失敗しました"
    }
  }
}
