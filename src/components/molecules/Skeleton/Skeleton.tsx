import React from "react";

interface SkeletonProps {
  itemHeight?: string;
  gridCols?: number;
  gridMatrix?: number[][];
  gap?: number;
  containerClasses?: string;
}

/**
 * @param gridMatrix - Two-dimensional array, where the outer array represents the rows.
 * Each inner array contains numbers that represent the amount of columns and their weight (space occupied in the grid).
 *
 * VERY IMPORTANT - The sum of the numbers in each inner array must be equal or less to the number of columns of the grid.
 *
 * For example, a matrix of:
 *
 * [4, 4, 4],
 *
 * [4, 4, 4],
 *
 * [4, 4, 4],
 *
 * This represents a grid with 4 rows and 3 columns, where each column has taken a third of the the space.
 *
 * And a matrix of:
 *
 *  [1],
 *
 *  [1, 2, 8 ,1],
 *
 * Will represent a grid with 2 rows, where the first will have a column that takes a 1/12 of the space, and the second will have a differente distribution.
 *
 */
const Skeleton = ({
  itemHeight = "12px",
  gap = 3,
  gridCols = 12,
  gridMatrix = [
    [4, 4, 4],
    [4, 4, 4],
    [4, 4, 4],
  ],
  containerClasses = "",
}: SkeletonProps) => {
  return (
    <div
      className={`grid grid-cols-${gridCols} gap-${gap} w-full ${containerClasses}`}
    >
      {gridMatrix.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <div
            className={`col-span-${gridCols} grid grid-cols-${gridCols} gap-${gap} w-full`}
          >
            {row.map((weight, colIndex) => (
              <div
                key={`${rowIndex}_${colIndex}`}
                style={{ height: itemHeight }}
                className={`col-span-${weight} animate-pulse rounded bg-slate-200`}
              ></div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Skeleton;
