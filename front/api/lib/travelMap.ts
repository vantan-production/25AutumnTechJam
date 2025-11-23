export type travelMapResponse = {
  walk: {
    time: number;
    distance: string;
  };
};

export async function travelMap(
  destination: string
): Promise<travelMapResponse> {
  try {
    const baseUrl = "/api/travelMap";

    const walkingResponse = await fetch(
      `${baseUrl}?mode=walking&destination=${encodeURIComponent(destination)}`
    );

    const walkingData = await walkingResponse.json();

    const walkResult = walkingData.success
      ? {
          time: walkingData.data.duration_seconds
            ? Math.round(walkingData.data.duration_seconds / 60)
            : 0,
          distance: walkingData.data.distance || "0",
        }
      : { time: 0, distance: "0" };

    return {
      walk: walkResult,
    };
  } catch (error) {
    console.error("Error fetching travel time:", error);
    return {
      walk: { time: 0, distance: "0" },
    };
  }
}
