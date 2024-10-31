import type { MetaFunction } from "@remix-run/node";
import { ColorModeButton } from "~/components/ui/color-mode";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <ColorModeButton />;
}
