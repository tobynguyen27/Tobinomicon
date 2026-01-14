import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import DiscordIcon from "@/components/brands/DiscordIcon";

export function baseOptions(): BaseLayoutProps {
    return {
        nav: {
            title: "Tobinomicon",
        },
        githubUrl: "https://github.com/tobynguyen27/Tobinomicon",
        links: [
            {
                type: "icon",
                icon: <DiscordIcon />,
                text: "Discord",
                url: "https://discord.gg/nPz39wet3p",
            },
        ],
    };
}
