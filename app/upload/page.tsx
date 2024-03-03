"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}
const UploadPage = () => {
  const [publicId, setPubicId] = useState("");
  return (
    <div>
      {publicId && <CldImage src={publicId} width={270} height={150} alt="" />}
      <CldUploadWidget
        uploadPreset="t6o4bscd"
        options={{
          sources: ["local"],
          maxFiles: 5,
          //   showAdvancedOptions: true,
          cropping: true,
          styles: {
            palette: {
              window: "#F5F5F5",
              sourceBg: "#FFFFFF",
              windowBorder: "#90a0b3",
              tabIcon: "#0094c7",
              inactiveTabIcon: "#69778A",
              menuIcons: "#0094C7",
              link: "#53ad9d",
              action: "#8F5DA5",
              inProgress: "#0194c7",
              complete: "#53ad9d",
              error: "#c43737",
              textDark: "#000000",
              textLight: "#FFFFFF",
            },
            fonts: {
              default: null,
              "sans-serif": {
                url: null,
                active: true,
              },
            },
          },
        }}
        onSuccess={(results) => {
          const info = results.info as CloudinaryResult;
          setPubicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
