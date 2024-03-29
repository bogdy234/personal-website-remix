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
        <main className="flex flex-col items-center justify-center w-full leading-10 min-h-[60vh]">
            <div className="flex items-center justify-center flex-col lg:flex-row gap-12">
                <div className="min-w-64 text-[1rem] text-justify break-words sm:break-normal sm:text-center sm:text-3xl">
                    <p>
                        <span>Hi!</span>
                        <span className="animate-wave-hand inline-block ml-2">👋</span>
                    </p>
                    <p>My name is Bogdan.</p>
                    <p>
                        I am a student at Technical University of Cluj-Napoca and also a passionate software developer
                        that currently works with Javascript, Typescript, React, Next.js, Remix and React Native.
                    </p>
                    <p>As a side activity I love playing football.</p>
                </div>
                <div className="w-1/2">
                    <img
                        src={image}
                        alt="a picture of me"
                        className="aspect-auto lg:max-w-[300px] rounded-lg animate-jello-horizontal"
                    />
                </div>
            </div>
        </main>
    );
}
