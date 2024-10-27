import prisma from "@/lib/db";
import Card from "../components/card";
import AppH1 from "../components/app-h1";

export default async function ChallengesPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  const challenges = await prisma.challenge.findMany();

  return (
    <main>
      <AppH1>Test your skills with the hardest challenges ever!</AppH1>

      <div className="flex flex-wrap justify-evenly px-[5%] mt-20 gap-6">
        {challenges.map((challenge, index) => (
          <Card
            challenge={challenge}
            key={challenge.id}
            fourth={index === challenges.length - 1 ? true : false}
          />
        ))}
      </div>
    </main>
  );
}
