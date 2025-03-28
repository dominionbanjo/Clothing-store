import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Abstract from "../assets/Images/Abstract4.png";
import { getQandAByCategory } from "../utils/faqData";
// import Wrapper from "../assets/wrappers/QandA";

const QandA = () => {
  const [activeCategory, setActiveCategory] = useState("ordering");
  const qAndAData = getQandAByCategory(activeCategory);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="w-[95%] sm:w-[90%] mx-auto mb-[50px] sm:mb-[150px]">
      <div className="border border-dashed border-[#c2b4a333] rounded-[25px] w-full mt-[30px] sm:mt-[60px] pt-[20px] sm:pt-[50px]">
        <div className="relative z-1 text-left w-full pl-[15px] sm:pl-[40px] mb-[30px] sm:mb-[60px]">
          <img
            src={Abstract}
            alt="abstract image"
            className="hidden sm:block absolute top-[-42px] right-0 w-[220px] h-auto rounded-tr-[10px] z-[-1]"
          />
          <div className="w-[100%] sm:w-[76%]">
            <h2 className="text-[20px] sm:text-[40px] mb-[15px] sm:mb-[20px] uppercase tracking-wide">
              Have Questions? We Have Answers.
            </h2>
            <p className="text-[13px] sm:text-[15px] tracking-wide opacity-60">
              Ease into the world of StyleLoom with clarity. Our FAQs cover a
              spectrum of topics.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="q-a flex w-[90vw] sm:w-auto overflow-x-auto pl-[10px] sm:ml-[50px] mb-0 sm:mb-[80px]">
            {["all", "ordering", "shipping", "returns", "support"].map(
              (category) => (
                <motion.div
                  key={category}
                  className={`flex items-center justify-center w-[90px] h-[42px] sm:h-[22px] px-[30px] py-[10px] sm:py-[20px] mr-[20px] sm:mr-[30px] mb-[15px] rounded-[5px] border border-dashed border-[#81807e] ${
                    activeCategory === category
                      ? "bg-[#c7baaa] border-none"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                  style={{ cursor: "pointer" }}
                  initial={{ backgroundColor: "#1a1a1a" }}
                  animate={{
                    backgroundColor:
                      activeCategory === category ? "#c7baaa" : "#1a1a1a",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.div>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <AnimatePresence mode="popLayout">
            {qAndAData.map((qAndA, index) => (
              <motion.div
                className="border border-dashed border-[#c2b4a333] h-[200px] w-full px-[20px] sm:px-[50px] py-[10px] sm:py-[20px] flex flex-col justify-center text-left"
                key={qAndA.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="my-[10px] sm:my-[20px]">{qAndA.question}</h3>
                <p className="text-[13px] opacity-60 m-0">{qAndA.answer}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default QandA;
