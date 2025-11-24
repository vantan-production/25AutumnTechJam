export type shopRequest = {
  id: number;
  is_cafe: boolean;
  name: string;
  description: string;
  address: string;
  station_distance: number,
  phone_number: string;
  min_budget: number | null;
  opens_at: string;
  closes_at: string;
  latitude: number;
  longitude: number;
  is_sun: number,
  is_mon: number,
  is_tue: number,
  is_wed: number,
  is_thu: number,
  is_fri: number,
  is_sat: number,
  created_at: string,
  updated_at: string,
  image_urls: string[];
};
export type shopResponse = {
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

export async function Shop(params?: URLSearchParams): Promise<shopResponse> {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/shop${
      params && params.toString() ? `?${params.toString()}` : ""
    }`;

    console.log(url)

    const response = await fetch(url, {
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
        message: "Failed to fetch shop detail",
      };
    }

    const data: shopDetailResponse = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      data: null,
      message: "Unexpected error while fetching shop detail",
    };
  }
}
