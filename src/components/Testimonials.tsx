import React from "react";

const Testimonials = () => {
  return (
    <div
    className="splide h-screen md:h-[calc(100vh-30vh)] bg-nails bg-center bg-no-repeat bg-cover bg-gray-500 bg-blend-multiply"
    role="group"
    aria-label="Splide Basic HTML Example"
  >
    <div className="splide__track h-full">
      <ul className="splide__list h-full">
        <li
          className="splide__slide text-center m-auto flex flex-col justify-center items-center h-full md:w-2/4"
        >
          <p className="mx-6 text-2xl leading-normal md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            magnam et laborum officiis, sapiente eius quo alias temporibus!
            Adipisci sed nemo voluptates minima molestiae quo! Dolorem aperiam
            suscipit blanditiis facilis?
          </p>
          <i className="font-sans">~Someone said</i>
        </li>
        <li
          className="splide__slide text-center m-auto flex flex-col justify-center items-center h-full md:w-2/4"
        >
          <p className="mx-6 text-2xl leading-normal md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            magnam et laborum officiis, sapiente eius quo alias temporibus!
            Adipisci sed nemo voluptates minima molestiae quo! Dolorem aperiam
            suscipit blanditiis facilis?
          </p>
          <i className="font-sans">~Someone said</i>
        </li>
        <li
          className="splide__slide text-center m-auto flex flex-col justify-center items-center h-full md:w-2/4"
        >
          <p className="mx-6 text-2xl leading-normal md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            magnam et laborum officiis, sapiente eius quo alias temporibus!
            Adipisci sed nemo voluptates minima molestiae quo! Dolorem aperiam
            suscipit blanditiis facilis?
          </p>
          <i className="font-sans">~Someone said</i>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Testimonials;
