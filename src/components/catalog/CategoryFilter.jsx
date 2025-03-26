import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const CategoryFilter = ({ handleChange }) => {
  const categoryList = [
    { title: "Smartphones", category: "Smartphone" },
    { title: "Tablets", category: "Tablet" },
    { title: "Notebooks", category: "Notebook" },
    { title: "Consolas", category: "Consola" },
  ];

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Categorías</AccordionTrigger>
        {categoryList.map((category) => (
          <AccordionContent key={category.title}>
            <Button
              className="hover:bg-tertiary-background-hover bg-tertiary-background text-button-text"
              onClick={() => handleChange("category", category.category)}
            >
              {category.category}
            </Button>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
};

export default CategoryFilter;
