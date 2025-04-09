import React, { useState } from "react";
import { Category } from "../types/interfaces";
import { Search, X } from "lucide-react";

interface CategoryListProps {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, setCategories }) => {
  const [categoryInput, setCategoryInput] = useState<string>("");

  const addCategory = () => {
    if (categoryInput.trim()) {
      const newCategory = { id: Date.now().toString(), name: categoryInput };
      setCategories([...categories, newCategory]);
      setCategoryInput("");
    }
  };

  const removeCategory = (id: string) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-3">Message Categories</h2>
      <p className="text-gray-600 mb-3">
        These are the categories which are visible to the user. This also helps
        you to filter and view messages as per your requirement.
      </p>
      <div className="mt-4">
        <label className="block text-gray-700 mb-2">Add the categories</label>
        <div className="flex items-center">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={16} className="text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter the category name"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && categoryInput.trim() && addCategory()
              }
            />
          </div>
          {categoryInput.trim() && (
            <button
              type="button"
              className="ml-3 px-4 py-2 bg-black text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={addCategory}
            >
              Add
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center bg-gray-100 px-3 py-1 rounded-full"
            >
              <span className="text-sm">{category.name}</span>
              <button
                type="button"
                className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => removeCategory(category.id)}
              >
                <X size={16} className="cursor-pointer" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
