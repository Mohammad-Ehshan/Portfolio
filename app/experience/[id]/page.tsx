import { notFound } from "next/navigation";
import ExperienceDetail from "@/components/experience-details";
import { getExperienceById } from "@/Data/Index";

export default async function ExperiencePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const experienceId = Number.parseInt(id);
  const experience = getExperienceById(experienceId);

  if (!experience) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <ExperienceDetail experience={experience} />
      </div>
    </main>
  );
}
