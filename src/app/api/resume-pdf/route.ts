import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(request: NextRequest) {
  try {
    // Path to your PDF file in the public directory
    const pdfPath = path.join(process.cwd(), "public", "sample.pdf");

    // Check if file exists
    if (!fs.existsSync(pdfPath)) {
      return NextResponse.json({ error: "PDF not found" }, { status: 404 });
    }

    // Read the file
    const pdfBuffer = fs.readFileSync(pdfPath);

    // Return the PDF with appropriate headers
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="sample.pdf"',
        "Content-Length": pdfBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error serving PDF:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
