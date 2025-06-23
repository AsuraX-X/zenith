import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import FoodPopUp from "./FoodPopUp";
import { AnimatePresence, motion } from "motion/react";

const FoodCard = ({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: string;
}) => {
  const [isOrdering, setIsOrdering] = useState(false);

  useEffect(() => {
    if (isOrdering) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOrdering]);

  return (
    <div className="flex items-center justify-between gap-4 border border-gray-500 pr-4 rounded-lg overflow-hidden">
      <AnimatePresence>
        {isOrdering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { delay: 0.2 },
            }}
            className="fixed z-10 bg-black/25 h-screen top-0 right-0 left-0 flex justify-center items-end"
          >
            <FoodPopUp
              close={() => setIsOrdering(false)}
              isOrdering={isOrdering}
              name={name}
              description={description}
              price={price}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center gap-4">
        <div className="min-h-35 min-w-35 bg-gray-600">
          <img src="" alt="" />
        </div>
        <div>
          <p className="">{name}</p>
          <p
            className="text-gray-400 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex text-[#e87171] text-nowrap">
          <p>GH₵{price}</p>
        </div>
        <button
          onClick={() => setIsOrdering(true)}
          className="bg-white cursor-pointer flex justify-center items-center rounded-full"
        >
          <BiPlus color="#ff2100" size={30} />
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
