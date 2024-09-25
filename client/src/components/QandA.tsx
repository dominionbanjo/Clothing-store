import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "../assets/wrappers/QandA";
import Abstract from "../assets/Images/Abstract4.png";
import { getQandAByCategory } from "../utils/faqData";

const QandA = () => {
  const [activeCategory, setActiveCategory] = useState("ordering");
  const qAndAData = getQandAByCategory(activeCategory);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Wrapper>
      <div className="QandA">
        <div className="top-section">
          <div className="QandA-top">
            <img src={Abstract} alt="abstract image" />

            <div className="QandA-top-texts">
              <h2>Have Questions? We Have Answers.</h2>
              <p>
                Ease into the world of StyleLoom with clarity. Our FAQs cover a
                spectrum of topics.
              </p>
            </div>
          </div>

          <div className="QandA-bottom">
            <div className="top-options">
              {["all", "ordering", "shipping", "returns", "support"].map(
                (category) => (
                  <motion.div
                    key={category}
                    className={`button-shape button ${
                      activeCategory === category ? "active" : ""
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
        </div>

        <div className="QandA-bottom boxes">
          <AnimatePresence mode="popLayout">
            {qAndAData.map((qAndA, index) => (
              <motion.div
                className="QandA-grid-item"
                key={qAndA.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3>{qAndA.question}</h3>
                <p>{qAndA.answer}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Wrapper>
  );
};

export default QandA;
