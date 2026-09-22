export function problemFor(e: unknown) {
if (e instanceof Error && e.message === "timeout")
return "The server took too long. Try again.";
if (e instanceof TypeError)
return "No connection. Check your Wi-Fi and try again.";
if (e instanceof Error && /^\d+$/.test(e.message))
return `Request failed (${e.message}). Check the API server.`;
return "Something went wrong.";
}
export type Status = "loading" | "empty" | "error" | "content";
