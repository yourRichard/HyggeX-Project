import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 rounded-lg mt-28 w-[60%] ml-[104px]">
        <h1 className="FAQ-gradient">FAQ</h1>
        <div className="border border-indigo-800 mt-6 rounded-lg w-[848px]">
        <Accordion
        title="Can education flashcards be used for all age groups?"
        answer="I like to use iOS products"
        />
        </div>
        <div className="border border-indigo-800 rounded-lg mt-4 w-[848px]">
        <Accordion
        title="How do education flashcards work?"
        answer="I like to use iOS products"
        />
        </div>
        <div className="border border-indigo-800 rounded-lg mt-4 w-[848px]">
        <Accordion
        title="Can education flashcards be used for test preparation?"
        answer="I like to use iOS products"
        />
        </div>
  
     
    </div>
  );
};

export default FAQ;