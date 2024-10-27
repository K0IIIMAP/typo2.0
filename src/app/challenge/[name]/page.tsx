import AppH1 from "@/app/components/app-h1";
import Trainer from "@/app/components/trainer";
import prisma from "@/lib/db";

type ChallengeParams = {
  params: {
    name: string;
  };
};

export default async function Challenge({ params }: ChallengeParams) {
  const title = params.name.slice(0, 1).toUpperCase() + params.name.slice(1);

  const challenge = await prisma.challenge.findFirst({
    where: {
      title: title,
    },
  });
  if (!challenge) {
    return;
  }

  return (
    <main>
      <AppH1>{title} </AppH1>

      <div className="mt-36">
        <Trainer text={challenge.text} timeLimit={challenge.timeLimit} />
      </div>
    </main>
  );
}
