interface SkeletonProps {
  itemHeight?: number;
  gridCols?: number;
  rows?: number;
  colsWeight?: number[];
  gap?: number;
}

const Skeleton = ({
  itemHeight = 4,
  gap = 4,
  gridCols = 12,
  rows = 12,
  colsWeight = [2, 4, 6],
}: SkeletonProps) => {
  return (
      <div className={`grid grid-cols-${gridCols} gap-${gap} w-full`}>
        {Array.from(Array(rows), (_, rowIndex) =>
          colsWeight.map((weight, colIndex) => (
            <div
              key={`${rowIndex}_${colIndex}`}
              className={`h-${itemHeight} col-span-${weight} bg-slate-200 rounded animate-pulse`}
            ></div>
          ))
        )}
      </div>
  );
};

export default Skeleton;
