import { NextRequest, NextResponse } from "next/server";

const NAGOYA_STATION = "愛知県名古屋市中村区名駅１丁目１−４";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get("mode") || "walking";
  const destination = searchParams.get("destination");

  if (!destination) {
    return NextResponse.json(
      { success: false, message: "Destination is required" },
      { status: 400 }
    );
  }

  if (!API_KEY) {
    return NextResponse.json(
      { success: false, message: "API key is not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
        NAGOYA_STATION
      )}&destinations=${encodeURIComponent(
        destination
      )}&mode=${mode}&language=ja&key=${API_KEY}`
    );

    const data = await response.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { success: false, message: `API error: ${data.status}`, data },
        { status: 400 }
      );
    }

    const element = data.rows[0]?.elements[0];

    if (!element || element.status !== "OK") {
      return NextResponse.json(
        {
          success: false,
          message: `Element error: ${element?.status || "NO_ELEMENT"}`,
          data: element,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        duration: element.duration.text,
        distance: element.distance.text,
        duration_seconds: element.duration.value,
        distance_meters: element.distance.value,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error fetching travel time",
        error: String(error),
      },
      { status: 500 }
    );
  }
}
