import { FilteredData } from "@/components/search/search-dialog";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useFilteredData = (data: FilteredData[]) => {
  const searchParams = useSearchParams();
  const [filteredData, setFilteredData] = useState<FilteredData[]>([]);

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      const filtered = data.filter((item: any) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [searchParams, data]);

  return {
    filteredData,
  };
};
