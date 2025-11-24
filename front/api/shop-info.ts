type shopRequest = {
  id: number;
  is_cafe: boolean;
  name: string;
  description: string;
  image_url: string;
  min_budget: number | null;
  opens_at: string;
  closes_at: string;
  address: string;
  phone_number: string;
  latitude: number;
  longitude: number;
};

type shopInfoResponse = {
  success: boolean;
  data: shopRequest | null;
};

export async function ShopInfo(id: number): Promise<shopInfoResponse> {
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

    if (!response.ok) {
      return {
        success: false,
        data: null,
      };
    }

    const result = await response.json();
    return {
      success: result.success,
      data: result.data || null,
    };
  } catch (error) {
    console.error("Error fetching shop by id:", error);
    return {
      success: false,
      data: null,
    };
  }
}
