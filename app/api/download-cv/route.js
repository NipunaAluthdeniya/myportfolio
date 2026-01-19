import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "Nipuna_Aluthdeniya_SE.pdf",
  );

  try {
    const data = await fs.promises.readFile(filePath);
    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Nipuna_Aluthdeniya_SE.pdf"',
      },
    });
  } catch (err) {
    return new Response("CV not found", { status: 404 });
  }
}
