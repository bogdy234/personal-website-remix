import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    title: "Skills",
    description: "This is the skills page of Bogdan Filimon's personal website",
    keywords: "Skills, Filimon, Bogdan",
  };
};

export default function Skills() {
  return (
    <div>
      <h1>Skills</h1>
    </div>
  );
}
