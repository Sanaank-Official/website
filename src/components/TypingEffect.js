import React, { useEffect, useState } from "react";
import "../app/styles/TypingEffect.css"; // Import the CSS for blinking cursor

const TypingEffect = () => {
  const words = ["Productive", "Creative", "Relax", "Confidence"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Speed of typing
  const deletingSpeed = 50; // Speed of deleting
  const delay = 1000; // Delay before switching to the next word

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayedText === currentWord) {
      // Pause before deleting
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayedText === "") {
      // Move to the next word
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText((prevText) =>
          isDeleting
            ? currentWord.substring(0, prevText.length - 1) // Delete a character
            : currentWord.substring(0, prevText.length + 1) // Add a character
        );
      }, isDeleting ? deletingSpeed : typingSpeed);

      return () => clearTimeout(timeout); // Clear timeout on cleanup
    }
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <div className="text-center mt-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black  mb-4 text-left">
        Help to improve focus for more{" "}
        <span className="text-black">{displayedText}</span>
        <span className="blinking-cursor">|</span>

      </h1>
    </div>
  );
};

export default TypingEffect;
