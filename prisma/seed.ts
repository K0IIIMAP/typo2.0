import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const challenges = [
  {
    title: "Easy",
    difficulty: "Easy",
    timeLimit: 10,
    description:
      "This is a challenge for beginners. Warm up before some serious stuff.",
    text: "The quick brown fox jumps over the lazy dog.",
  },
  {
    title: "Normal",
    difficulty: "Normal",
    timeLimit: 12,
    description: "This challenge might cause come problems. Don't give up..",
    text: "Exuberant jackals swiftly quiz bright, vexed wizards on complex glyphs.",
  },
  {
    title: "Difficult",
    difficulty: "Difficult",
    timeLimit: 15,
    description:
      "This challenge is very hard to complete even for experienced user.",
    text: "Six slippery snails slid slowly southward under the golden sunlight, evading fierce predators.",
  },
  {
    title: "Impossible",
    difficulty: "Impossible",
    timeLimit: 12,
    description:
      "Get ready to test your skills! You will be lucky to complete this one!",
    text: "Jovial wizards perplexedly invoked enigmatic glyphs; quixotic sorcery defied traditional understanding.",
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const challenge of challenges) {
    const result = await prisma.challenge.create({
      data: challenge,
    });
    console.log(`Created challenge with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
