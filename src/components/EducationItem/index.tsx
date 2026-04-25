import EducationImage from '../EducationImage';
import EducationInfo from '../EducationInfo';

interface EducationItemProps {
  currentEdu: Education;
}

export default function EducationItem({ currentEdu }: EducationItemProps) {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row lg:flex-row items-stretch bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-sm transition-all duration-300">

      <EducationInfo currentEdu={currentEdu} />

      <EducationImage imageUrl={currentEdu.imageUrl} />

    </div>
  );
}
