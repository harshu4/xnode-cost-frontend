import { createClient } from 'contentful'
import { NextResponse } from 'next/server'
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function GET(req) {
  return NextResponse.json(
    { error: 'Method not allowed' },
    {
      status: 405,
    },
  )
}
