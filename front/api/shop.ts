export type shopRequest = {
  id: number;
  is_cafe: boolean;
  name: string;
  description: string;
  min_budget: number | null;
  opens_at: string;
  closes_at: string;
  address: string;
  phone_number: string;
  latitude: number;
  longitude: number;
  image_urls: string[];
};
type shopResponse = {
  success: boolean;
  data: shopRequest[];
};

export async function Shop(params?: URLSearchParams): Promise<shopResponse> {
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
