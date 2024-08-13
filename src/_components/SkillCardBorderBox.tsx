import { type SkillCardItemProps } from "~/types/skillCardItem";
import SkillCardItem from "./SkillCardItem";

interface SkillCardBorderBoxProps {
  skillCardItem: SkillCardItemProps[];
}

const SkillCardBorderBox = ({ skillCardItem }: SkillCardBorderBoxProps) => {
  return (
    <div className='border border-mediumGrey rounded-3xl text-center p-6 flex flex-col items-center justify-center w-fit'>
      <div className="flex flex-col items-center gap-y-10">
        <h1 className="text-2xl text-darkGrey font-semibold">Frontend Development</h1>
        <div className="flex flex-col gap-y-8">
          {skillCardItem.map((item, index) => (
            <SkillCardItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCardBorderBox;
