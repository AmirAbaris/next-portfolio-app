import PrimaryButton from "./PrimaryButton";
import Link from "next/link";
import ImageWithLoader from "./ImageWithLoader";
import { memo } from "react";

interface ProjectItemBorderBoxProps {
  imagePath: string;
  title: string;
  githubLink?: string;
  isLive?: boolean;
  projectLink?: string;
}

const ProjectItemBorderBox = memo(
  ({
    imagePath,
    title,
    githubLink,
    isLive = false,
    projectLink,
  }: ProjectItemBorderBoxProps) => {
    return (
      <div className="flex flex-col gap-y-8 rounded-3xl border border-mediumGrey p-6 text-center">
        <ImageWithLoader
          src={imagePath}
          alt={title}
          borderRadius="rounded-3xl"
          className="aspect-video flex-1 object-cover"
        />
        <h1 className="text-3xl font-semibold flex-1">{title}</h1>
        {isLive && projectLink ? (
          <Link href={projectLink} target="_blank">
            <PrimaryButton>View Project</PrimaryButton>
          </Link>
        ) : (
          <Link href={githubLink ?? ""} target="_blank">
            <PrimaryButton>Github Repo</PrimaryButton>
          </Link>
        )}
      </div>
    );
  },
);

// Add a display name to the memoized component
ProjectItemBorderBox.displayName = "ProjectItemBorderBox";

export default ProjectItemBorderBox;
