import { MetaFunction } from "@remix-run/node";
import image from "public/about-photo.jpeg";

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
    <div className="flex flex-col items-center justify-center w-full leading-10 min-h-[60vh]">
      <div className="flex items-center justify-center flex-col lg:flex-row gap-12">
        <div className="min-w-64">
          <div className="text-center">
            <span>Hi!</span>
            <span className="animate-wave-hand inline-block ml-2">👋</span>
          </div>
          <div className="text-center">My name is Bogdan.</div>
          <div className="text-center">
            I am a student at Technical University of Cluj-Napoca and also a
            passionate software developer that currently works with Javascript,
            Typescript, React, Next.js, Remix and React Native.
          </div>
          <div className="text-center">
            As a side activity I love playing football.
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={image}
            alt="a picture of me"
            className="aspect-auto lg:max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
