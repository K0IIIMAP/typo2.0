import AppH1 from "@/app/components/app-h1";
import Trainer from "@/app/components/trainer";
import prisma from "@/lib/db";

type ModeParams = {
  params: {
    name: string;
  };
};

export default async function Mode({ params }: ModeParams) {
  const title = params.name.slice(0, 1).toUpperCase() + params.name.slice(1);
  console.log(params.name);
  const mode = await prisma.mode.findFirst({
    where: {
      title: title,
    },
  });
  let text = mode.text;

  let shuffledText = text
    .split(" ") // Split the string into an array of words
    .sort(() => Math.random() - 0.5) // Shuffle the array randomly
    .join(" "); // Join the array back into a string with spaces
  if (params.name == "space") {
    shuffledText = shuffledText.split(" ").slice(0, 400).join(" ");
  }

  if (!mode) {
    return;
  }

  return (
    <main>
      <AppH1>{title}</AppH1>
      <div className="mt-36">
        <Trainer text={shuffledText} />
      </div>
    </main>
  );
}
