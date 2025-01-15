import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <>
      <div className="relative">
        <Input
          className="text-muted-foreground pl-10 "
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("search")?.toString()}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
    </>
  );
}
