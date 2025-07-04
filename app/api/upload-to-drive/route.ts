import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { base64, fileName, mimeType } = body;

  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_EMAIL,
    undefined,
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/drive.file']
  );

  const drive = google.drive({ version: 'v3', auth });

  const buffer = Buffer.from(base64, 'base64');

  const res = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID!],
      mimeType,
    },
    media: {
      mimeType,
      body: Buffer.from(buffer),
    },
  });

  return NextResponse.json({ fileId: res.data.id });
}
