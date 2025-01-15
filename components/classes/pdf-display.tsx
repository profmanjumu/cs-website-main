"use client";
import { CategorizedGoogleDriveFile, GoogleDriveFile } from "@/lib/types";
import { Download, DownloadIcon } from "lucide-react";
import React from "react";
import CategoryDivider from "./category-divider";

type PdfDisplayProps = {
  files: CategorizedGoogleDriveFile[];
};

const PdfDisplay = ({ files }: PdfDisplayProps) => {
  return (
    <section className="mb-12">
      <CategoryDivider>{files[0].category}</CategoryDivider>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file, index) => {
          const embedUrl = `https://drive.google.com/file/d/${file.id}/preview`;
          const fileNameWithoutExtension = file.name
            .split(".")
            .slice(0, -1)
            .join(".");
          return (
            <li key={index} style={{ width: "100%", height: "500px" }}>
              <div className="flex items-center gap-x-3 m-2">
                <h2 className="text-muted-foreground">
                  {fileNameWithoutExtension}
                </h2>
                <a href={file.webContentLink}>
                  <DownloadIcon className="opacity-50 hover:opacity-100 transition-colors duration-150" />
                </a>
              </div>
              <iframe
                src={embedUrl}
                style={{ width: "100%", height: "100%" }}
              ></iframe>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PdfDisplay;
