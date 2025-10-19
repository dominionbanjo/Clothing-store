import { useMemo, useState, useEffect } from "react";
type Category = string;

export const useVisibleProducts = (categories: Category[]) => {
  const initialVisibleCounts = useMemo(
    () =>
      categories.reduce((acc, category) => {
        acc[category] = 3;
        return acc;
      }, {} as Record<Category, number>),
    [categories]
  );

  const initialShowMore = useMemo(
    () =>
      categories.reduce((acc, category) => {
        acc[category] = false;
        return acc;
      }, {} as Record<Category, boolean>),
    [categories]
  );

  const [visibleCounts, setVisibleCounts] = useState(initialVisibleCounts);
  const [showMore, setShowMore] = useState(initialShowMore);

  useEffect(() => {
    setVisibleCounts(initialVisibleCounts);
    setShowMore(initialShowMore);
  }, [initialVisibleCounts, initialShowMore]);

  return { visibleCounts, showMore, setVisibleCounts, setShowMore };
};
