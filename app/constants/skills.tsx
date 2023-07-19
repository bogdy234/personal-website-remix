import {
    CssIcon,
    ExpressIcon,
    FlutterIcon,
    GraphQL,
    HtmlIcon,
    JavascriptIcon,
    NestIcon,
    NextIcon,
    NodeIcon,
    PrismaIcon,
    ReactIcon,
    RemixIcon,
    TailwindIcon,
    TypescriptIcon,
} from "~/components/Icons/Icons";

export const SKILLS = {
    LANGUAGES_ITEMS: [
        {
            text: "Javascript",
            href: "https://www.javascript.com/",
            Icon: <JavascriptIcon />,
        },
        {
            text: "Typescript",
            href: "https://www.typescriptlang.org/",
            Icon: <TypescriptIcon />,
        },
    ],
    FRONTEND_ITEMS: [
        {
            text: "HTML5",
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            Icon: <HtmlIcon />,
        },
        {
            text: "CSS3",
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            Icon: <CssIcon />,
        },
        {
            text: "Tailwind",
            href: "https://tailwindcss.com/",
            Icon: <TailwindIcon />,
        },
        {
            text: "React",
            href: "https://reactjs.org/",
            Icon: <ReactIcon />,
        },
        {
            text: "Next.js",
            href: "https://nextjs.org/",
            Icon: <NextIcon />,
        },
        {
            text: "Remix",
            href: "https://remix.run/docs/en/v1",
            Icon: <RemixIcon />,
        },
    ],
    BACKEND_ITEMS: [
        {
            text: "Node.js",
            href: "https://nodejs.org/en/",
            Icon: <NodeIcon />,
        },
        {
            text: "Express.js",
            href: "https://expressjs.com/",
            Icon: <ExpressIcon />,
        },
        // {
        //   text: "MongoDB",
        //   href: "https://www.mongodb.com/",
        //   Icon: "/skills/mongo.svg",
        // },
        {
            text: "Prisma",
            href: "https://www.prisma.io/",
            Icon: <PrismaIcon />,
        },
        {
            text: "Next.js",
            href: "https://nextjs.org/",
            Icon: <NextIcon />,
        },
        {
            text: "Remix",
            href: "https://remix.run/docs/en/v1",
            Icon: <RemixIcon />,
        },
        {
            text: "NestJS",
            href: "https://nestjs.com/",
            Icon: <NestIcon />,
        },
    ],
    OTHERS_ITEMS: [
        {
            text: "GraphQL",
            href: "https://graphql.org",
            Icon: <GraphQL />,
        },
    ],
    HOBBIES_ITEMS: [
        {
            text: "Flutter",
            href: "https://flutter.dev/",
            Icon: <FlutterIcon />,
        },
    ],
};
