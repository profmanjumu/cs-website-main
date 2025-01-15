import Link from "next/link";
import SearchDialog from "./search/search-dialog";
import { Suspense } from "react";

const Footer = () => {
  return (
    <div className="hidden md:block w-full md:max-w-3xl py-2 px-4 fixed bottom-0 mb-2 left-0 right-0 mx-auto rounded-md backdrop-blur-sm">
      <footer className="flex flex-row items-center justify-between">
        <Link className="hover:underline" href="/resources">
          Current Resources
        </Link>
        <Suspense>
          <SearchDialog />
        </Suspense>
      </footer>
    </div>
  );
};

export default Footer;
