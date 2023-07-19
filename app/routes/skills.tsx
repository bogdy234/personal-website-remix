import { MetaFunction } from "@remix-run/node";
import SkillCard from "~/components/SkillCard";
import { SKILLS } from "~/constants/skills";

export const meta: MetaFunction = () => {
    return {
        charset: "utf-8",
        title: "Skills",
        description: "This is the skills page of Bogdan Filimon's personal website",
        keywords: "Skills, Filimon, Bogdan",
    };
};

const { LANGUAGES_ITEMS, FRONTEND_ITEMS, BACKEND_ITEMS, HOBBIES_ITEMS, OTHERS_ITEMS } = SKILLS;

export default function Skills() {
    return (
        <main className="xl:w-8/12 m-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard title="Languages" items={LANGUAGES_ITEMS} />
            <SkillCard title="Frontend" items={FRONTEND_ITEMS} />
            <SkillCard title="Backend" items={BACKEND_ITEMS} />
            <SkillCard title="Others" items={OTHERS_ITEMS} />
            <SkillCard title="Hobbies" items={HOBBIES_ITEMS} />
        </main>
    );
}
