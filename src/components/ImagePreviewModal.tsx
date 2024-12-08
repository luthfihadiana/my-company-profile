import { ProductDetail } from "@/types";
import { useEffect, useState } from "react";

type ImagePreviewModalProps = {
  data?: ProductDetail;
  onClose: () => void;
};

const ImagePreviewModal = ({
  data,
  onClose,
}: ImagePreviewModalProps) => {

  if (!data?.image_url) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose} // Close the modal when clicking outside the image
    >
      <div
        className="relative max-w-full max-h-full p-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
      >
        <button
          className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={data?.image_url}
          alt="Preview"
          className="rounded-lg shadow-lg w-[300px] h-[300px] md:w-[500px] mid:h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default ImagePreviewModal;