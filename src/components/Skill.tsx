export const Skill = ({
    icon: Icon,
    name,
  }: {
    icon: React.ElementType;
    name: string;
  }) => {
    return (
      <div className="flex cursor-pointer items-center gap-2 rounded-md bg-[#24262B]  border border-transparent px-4 py-2 hover:border-white">
        <Icon className="h-5 w-5" />
        <span>{name}</span>
      </div>
    );
  }