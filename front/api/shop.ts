export type shopRequest = {
  id: number;
  is_cafe: boolean;
  name: string;
  description: string;
  image_urls: string[];
  min_budget: number | null;
  opens_at: string;
  closes_at: string;
  address: string;
  phone_number: string;
  latitude: number;
  longitude: number;
};
type shopResponse = {
  success: boolean;
  data: shopRequest[];
  message?: string;
};

type shopDetailResponse = {
  success: boolean;
  data: shopRequest | null;
  message?: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function Shop(): Promise<shopResponse> {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/shop`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return {
        success: false,
        data: [],
      };
    }
    const data: shopResponse = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      data: [],
    };
  }
}

export async function ShopDetail(id: number): Promise<shopDetailResponse> {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/shop/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        success: false,
        data: null,
      };
    }

    const data: shopDetailResponse = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      data: null,
    };
  }
}
