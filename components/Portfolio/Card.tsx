import { useProject } from "@/context/ProjectContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface Project {
  id: number;
  image: string;
  category: string;
  title: string;
  description?: string;
  client?: string;
  services?: string[];
  date?: string;
  link?: string;
} 

interface CardProps extends Project {}

export default function Card({ id, image, category, title, ...rest   }: CardProps) {
  const router = useRouter();
  const { setSelectedProject, setIsDetailsVisible ,selectedProject} = useProject();

  const handleClick = () => {
    const project = { id, image, category, title, ...rest };
    setSelectedProject(project);
    setIsDetailsVisible(true);
    router.push(`#project-details`);
    
    // Smooth scroll to details section
    const detailsSection = document.getElementById('project-details');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
    onClick={handleClick}
    className="portfolio-card min-w-60 h-full min-h-40  relative group transition-all duration-200 cursor-pointer">
      <Image
        className="w-full h-full object-cover rounded-lg "
        src={image}
        alt={title}
        width={500}
        height={500}
      />
      <span className="absolute top-0 left-0 h-full w-full bg-black rounded-lg   opacity-40 z-10 hidden peer-hover:block group-hover:block transition-all duration-200"></span>
      <div className="flex flex-col  gap-5 text-white absolute left-0 top-0 z-50 items-center opacity-0 group-hover:opacity-100 justify-center w-full h-full transition-all duration-200">
        <span className="rounded-full border border-white px-4 py-2">
          {category}
        </span>
        <span className="font-bold">{title}</span>
      </div>
    </div>
  );
}
