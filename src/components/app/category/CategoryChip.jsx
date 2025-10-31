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
import axios from "../../../axios";
import { SuccessToast } from "../../global/Toaster";

export default function CategoryChip({
  setIsEditCategory,
  categoryData,
  setEditdata,
  setUpdate,
}) {
  const [isSubEditModalOpen, setIsSubEditModalOpen] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [newSubcategoryName, setNewSubcategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 🌀 Loading state

  const categoryIcons = {
    C06: { icon: educational, alt: "educational" },
    C05: { icon: arts, alt: "arts" },
    C08: { icon: sports, alt: "games" },
    C09: { icon: volunteering, alt: "volunteering" },
    C07: { icon: nightlife, alt: "nightlife" },
    C02: { icon: outdoor, alt: "outdoor" },
    C10: { icon: networking, alt: "networking" },
    C04: { icon: food, alt: "food" },
    C03: { icon: fitness, alt: "fitness" },
    C01: { icon: social, alt: "social" },
  };

  const defaultIcon = { icon: categoryData.icon, alt: "conference" };
  const currentCategory = categoryIcons[categoryData.categoryID] || defaultIcon;

  const handleRenameSubcategory = async () => {
    if (!selectedSubcategory || !newSubcategoryName.trim()) return;
    setIsLoading(true);
    try {
      const res = await axios.post("/category/rename-subcategory", {
        subcategoryID: selectedSubcategory._id,
        newName: newSubcategoryName.trim(),
      });
      if (res?.status === 200) {
        SuccessToast(res?.data?.message);
        setIsSubEditModalOpen(false);
        setUpdate((prev) => !prev); 
      }
    } catch (error) {
      console.error("Error renaming subcategory:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
        <button
          onClick={() => {
            setIsEditCategory(true);
            setEditdata(categoryData);
          }}
        >
          <CiEdit color="#2F7EF7" size={25} />
        </button>
      </div>

      <div className="inline-flex flex-wrap gap-2 mt-5 bg-[#2626264D] w-full rounded-[15px] p-3">
        {categoryData.subcategories.map((item, index) => (
          <div
            key={index}
            className="inline-flex w-full sm:w-auto items-center justify-between bg-[#434343] rounded-full p-2 px-4"
          >
            <span className="whitespace-nowrap text-xs font-medium text-white">
              {item.name}
            </span>
            <button
              className="ml-2"
              onClick={() => {
                setSelectedSubcategory(item);
                setNewSubcategoryName(item.name);
                setIsSubEditModalOpen(true);
              }}
            >
              <CiEdit size={18} color="#2F7EF7" />
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Editing Subcategory */}
      {isSubEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1e1e1e] rounded-2xl p-6 w-[90%] max-w-sm">
            <h2 className="text-white text-lg font-semibold mb-4">
              Rename Subcategory
            </h2>

            <input
              type="text"
              value={newSubcategoryName}
              onChange={(e) => setNewSubcategoryName(e.target.value)}
              className="w-full p-2 rounded-lg bg-[#333] text-white focus:outline-none mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsSubEditModalOpen(false)}
                className="px-4 py-2 bg-gray-600 rounded-lg text-white hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleRenameSubcategory}
                className="px-4 py-2 bg-[#2F7EF7] rounded-lg text-white hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Saving...
                  </>
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
