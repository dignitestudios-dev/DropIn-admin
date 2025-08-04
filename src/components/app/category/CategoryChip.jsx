import {
  arts,
  concert,
  confrence,
  educational,
  exhibition,
  fasion,
  fitness,
  food,
  music,
  networking,
  nightlife,
  outdoor,
  social,
  sports,
  volunteering,
} from "../../../assets/export";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
export default function CategoryChip({
  setIsEditCategory,
  categoryData,
  setEditdata,
}) {
  console.log(categoryData , "categoryData");
  const categoryIcons = {
    "C06": { icon: educational, alt: "educational" },
    "C05": { icon: arts, alt: "arts" },
    "C08": { icon: sports, alt: "games" },
    "C09": { icon: volunteering, alt: "volunteering" },
    "C07": { icon: nightlife, alt: "nightlife" },
    "C02": { icon: outdoor, alt: "outdoor" },
    "C10": { icon: networking, alt: "networking" },
    "C04": { icon: food, alt: "food" },
    "C03": { icon: fitness, alt: "fitness" },
    "C01": { icon: social, alt: "social" },
  };

  // Default icon fallback if category is not listed
  const defaultIcon = { icon: categoryData.icon, alt: "conference" };
  const currentCategory = categoryIcons[categoryData.categoryID] || defaultIcon;

  return (
    <div className="bg-[#13131399] rounded-[15px] p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 me-1 inline-block size-6 rounded-full"
            src={currentCategory.icon}
            alt={currentCategory.alt}
          />
          <h3 className="font-[500] text-[16px] text-white">
            {categoryData.name}
          </h3>
        </div>
        <div className="flex gap-5 items-center">
          <button onClick={() => {setIsEditCategory(true); setEditdata(categoryData)}}>
            <CiEdit color="#2F7EF7" size={25} />
          </button>
        </div>
      </div>

      <div className="inline-flex flex-wrap gap-2 mt-5 bg-[#2626264D] w-full rounded-[15px] p-3">
        {categoryData.subcategories.map((item, index) => (
          <div
            key={index}
            className="inline-flex w-full sm:w-auto flex-nowrap items-center bg-[#434343] rounded-full p-2"
          >
            <div className="whitespace-nowrap text-xs font-medium text-white">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
