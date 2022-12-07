import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    title: "About",
    description: "This is the about page of Bogdan Filimon's personal website",
    keywords: "About, Filimon, Bogdan",
  };
};

export default function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
