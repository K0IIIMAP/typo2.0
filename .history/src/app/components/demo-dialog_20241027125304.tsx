import { cn } from "@/lib/utils";
import Trainer from "./trainer";

const introText =
  "Welcome to Space Typo! Created by Kirill Amirov, a full-stack Next.js developer from Ukraine, this app is designed to enhance your typing skills while immersing you in a cosmic adventure. ";

export default function DemoDialog({
  dialogIsOpen,
}: {
  dialogIsOpen: boolean;
}) {
  return (
    <div
      className={cn(
        `fixed top-[-100%] left-0 w-full h-full bg-gray-700 bg-opacity-50 backdrop-blur-sm flex items-center justify-center duration-300 z-[1]`,
        {
          "fixed top-[0%]": dialogIsOpen,
        }
      )}
    >
      <div className="relative w-full h-full">
        <div
          className={cn(
            "w-[80%] h-[70%] bg-zinc-800 absolute left-1/2 top-1/2 transition-transform duration-500 translate-x-[-50%] translate-y-[-50%]" // Transition added here
          )}
        >
          {dialogIsOpen && (
            <div className="flex w-full h-full pt-32 z-[999]">
              <Trainer text={introText} demo={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
