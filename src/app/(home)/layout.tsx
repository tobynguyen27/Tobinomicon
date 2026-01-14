import { HomeLayout } from "fumadocs-ui/layouts/home";
import Footer from "@/components/Footer";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
    const sharedOptions = baseOptions();
    return (
        <HomeLayout
            {...sharedOptions}
            links={[
                {
                    text: "Documentation",
                    url: "/docs",
                },
                ...(sharedOptions.links ?? []),
            ]}>
            {children}
            <Footer />
        </HomeLayout>
    );
}
