import { testimonialsData } from "@/lib/data";
import React from "react";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="md:mt-60 py-28 dark:bg-zinc-800 bg-zinc-300 scroll-mt-20 lg:scroll-mt-32"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              index={index}
              text={testimonial.text}
              name={testimonial.name}
              title={testimonial.title}
              avatarImg={testimonial.avatarImg}
              className={(index === 2 && "md:hidden") || ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
