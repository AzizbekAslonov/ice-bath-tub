import {grid} from "../assets";
import {roadmap} from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import {Gradient} from "./design/Roadmap";

const Roadmap = () => {
  return (
    <Section id="roadmap" className="overflow-hidden" crosses>
      <div className="container md:pb-10">
        <Heading tag="Bizni nima ajratib turadi" title="Brend strategiyasi va farqi" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid background"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    </div>
                    <div className="max-h-[30rem] overflow-hidden mb-10 -my-10 -mx-15">
                      <img
                        className="w-full h-full object-cover"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </div>
                    <h3 className="h4 mb-4">{item.title}</h3>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
