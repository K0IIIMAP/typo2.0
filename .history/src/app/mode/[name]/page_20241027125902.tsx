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

  const mode = await prisma.mode.findFirst({
    where: {
      title: title,
    },
  });
  const text = mode.text;
  const shuffledText = test
    .split("")
    .sort(() => Math.random() - 0.5) // Shuffle the array randomly
    .join(""); // Convert the array back to a string

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