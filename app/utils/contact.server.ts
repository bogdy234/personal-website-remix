import { createCookieSessionStorage } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const { commitSession, getSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "contact_success_message",
      secure: true,
      secrets: [sessionSecret],
      sameSite: "lax",
      path: "/",
      httpOnly: true,
    },
  });

export async function getContactSession(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  return session;
}

export { commitSession, getSession, destroySession };
