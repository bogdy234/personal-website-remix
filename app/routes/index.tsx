import type { MetaFunction } from "@remix-run/node";
import HomeCard from "~/components/HomeCard";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 pt-24">
        <HomeCard
          title="Web development"
          content=""
          src="/web-development.png"
        />
        <HomeCard
          title="Mobile development"
          content=""
          src="/mobile-development.png"
        />
      </div>
    </div>
  );
}
