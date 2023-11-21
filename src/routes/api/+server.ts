import type { RequestEvent, RequestHandler } from "./$types";
import { readFileSync, appendFile } from "fs";

const headers = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
};

export const POST: RequestHandler = async (e: RequestEvent) => {
  let body;
	try {
		body = await e.request.json();
	} catch (e) {
		return new Response(JSON.stringify({ message: 'Invalid Body' }), {
			status: 400,
			headers: headers
		});
  }
  console.log(body);
  const name = body.name;
  if (!name) {
    return new Response(JSON.stringify({ message: "Invalid Body" }), { status: 400, headers: headers });
  }
    
  let found = false;
  readFileSync("/home/NaturoDashboard/QuizMod/done.txt", "utf8").split("\n").forEach((line: any) => {
    if (line === name) {
      found = true;
    }
  });

  if (!found) {
    appendFile("/home/NaturoDashboard/QuizMod/done.txt", name + "\n", (err: any) => {});
  }
  
  return new Response(JSON.stringify({ message: found ? "done": "not" }), { status: 200, headers: headers });
};