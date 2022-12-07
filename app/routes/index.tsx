import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    title: "Bogdan Filimon",
    description: "This is the home page of Bogdan Filimon's personal website",
    keywords: "Home, Filimon, Bogdan",
  };
};

export default function Index() {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
}
