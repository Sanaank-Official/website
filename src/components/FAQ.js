import { useState } from "react";

const FAQSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    // FAQs divided into two containers
    const faqsContainer1 = [
        { 
            question: "How do I get the app for my phone?", 
            answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
        },
        { 
            question: "What plan should I choose?", 
            answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
        },
        { 
            question: "What happens to my app if I stop paying?", 
            answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
        },
        { 
            question: "Does it have in-app purchases?", 
            answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
        }
    ];

    const faqsContainer2 = [
        { 
            question: "Can I use this app on multiple devices?", 
            answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
        },
        { 
            question: "Is my phone supported for this app?", 
            answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
        },
        { 
            question: "How to deposit money?", 
            answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
        },
        { 
            question: "How to withdraw money?", 
            answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
        }
    ];

    return (
        <div className="bg-[rgb(253,253,240)] py-16">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-5 text-gray-800">
                    FAQ
                </h2>
                <div className="w-32 mx-auto h-[0.15rem] bg-yellow-400 mb-12"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Container 1 */}
                    <div
                        className="bg-white rounded-lg border border-gray-300 shadow-lg px-5"
                        style={{ alignSelf: "start" }} // Independent alignment
                    >
                        <div className="flex flex-col">
                            {faqsContainer1.map((faq, index) => (
                                <div key={index}>
                                    <div
                                        className="flex justify-between items-start p-4 border-b cursor-pointer"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <h3 className="text-lg font-bold text-gray-800 flex-1 text-left">
                                            {faq.question}
                                        </h3>
                                        <button className="faq-toggle text-xl font-bold text-gray-500 transform transition-transform duration-300">
                                            <span
                                                className={`faq-icon ${
                                                    expandedIndex === index
                                                        ? "rotate-45"
                                                        : ""
                                                }`}
                                            >
                                                {expandedIndex === index
                                                    ? "−"
                                                    : "+"}
                                            </span>
                                        </button>
                                    </div>
                                    <div
                                        className={`faq-answer overflow-hidden transition-all duration-700 ease-in-out ${
                                            expandedIndex === index
                                                ? "max-h-40 p-4"
                                                : "max-h-0"
                                        }`}
                                    >
                                        <p className="text-base text-gray-600 text-left">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Container 2 */}
                    <div
                        className="bg-white rounded-lg border border-gray-300 shadow-lg px-5"
                        style={{ alignSelf: "start" }} // Independent alignment
                    >
                        <div className="flex flex-col">
                            {faqsContainer2.map((faq, index) => (
                                <div key={index + faqsContainer1.length}>
                                    <div
                                        className="flex justify-between items-start p-4 border-b cursor-pointer"
                                        onClick={() =>
                                            handleToggle(
                                                index + faqsContainer1.length
                                            )
                                        }
                                    >
                                        <h3 className="text-lg font-bold text-gray-800 flex-1 text-left">
                                            {faq.question}
                                        </h3>
                                        <button className="faq-toggle text-xl font-bold text-gray-500 transform transition-transform duration-300 ">
                                            <span
                                                className={`faq-icon ${
                                                    expandedIndex ===
                                                    index + faqsContainer1.length
                                                        ? "rotate-45"
                                                        : ""
                                                }`}
                                            >
                                                {expandedIndex ===
                                                index + faqsContainer1.length
                                                    ? "−"
                                                    : "+"}
                                            </span>
                                        </button>
                                    </div>
                                    <div
                                        className={`faq-answer overflow-hidden transition-all duration-700 ease-in-out ${
                                            expandedIndex ===
                                            index + faqsContainer1.length
                                                ? "max-h-40 p-4"
                                                : "max-h-0"
                                        }`}
                                    >
                                        <p className="text-base text-gray-600 text-left">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
