import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import HomeCard from "~/components/HomeCard";
import Toast from "~/components/Toast";
import { commitSession, getContactSession } from "~/utils/contact.server";

export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    title: "Bogdan Filimon",
    description: "This is the home page of Bogdan Filimon's personal website",
    keywords: "Home, Filimon, Bogdan",
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const contactSession = await getContactSession(request);

  const message = contactSession.get("contactMessage") || null;

  return json(
    { message },
    {
      headers: {
        "Set-Cookie": await commitSession(contactSession),
      },
    }
  );
};

export default function Index() {
  const data = useLoaderData();

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-32 pt-24">
      <HomeCard title="Web development" content="" src="/web-development.png" />
      <HomeCard
        title="Mobile development"
        content=""
        src="/mobile-development.png"
      />
      <Toast message={data.message} />
    </main>
  );
}
