interface ISkeletonTextProps {
  className?: string;
}

const SkeletonText = ({ className = "" }: ISkeletonTextProps) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <div className="w-full h-full bg-gray-200 rounded-xl animate-pulse"/>
    </div>
  );
};

export default SkeletonText;
