// app/api/generate/route.ts

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 });
    }

    const AI_ENGINE_URL = process.env.AI_ENGINE_URL;

    if (!AI_ENGINE_URL) {
      return new NextResponse('AI Engine URL is not configured', { status: 500 });
    }
    
    // --- THE FIX IS HERE ---
    // We need to send the prompt as URL-encoded form data, not JSON.
    //const formData = new URLSearchParams({ prompt });
    const formData = new URLSearchParams();
    formData.append('prompt', prompt);

    const response = await fetch(`${AI_ENGINE_URL}/generate-image`, {
      method: 'POST',
      headers: {
        // Change the content type to match the form data
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(), // Send the form data as a string.
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Engine Error:', errorText);
      return new NextResponse(`Error from AI Engine: ${errorText}`, { status: response.status });
    }

    return new NextResponse(response.body, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
      },
    });

  } catch (error) {
    console.error('API Error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
