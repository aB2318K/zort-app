import { LazyMotion, domAnimation, m, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import PhoneMockup from "./PhoneMockup";
import BetSlipScanner from "./PhoneUIs/BetSlipScanner";
import InteractiveDashboard from "./PhoneUIs/InteractiveDashboard";
import SmartAnalytics from "./PhoneUIs/SmartAnalytics";
import Security from "./PhoneUIs/Security";

const features = [
  { title: "AI Bet Slip Scanner", description: "Instantly scan and analyze any bet slip with 95% accuracy." },
  { title: "Interactive Dashboard", description: "Track performance with beautiful real-time visualizations." },
  { title: "Smart Analytics", description: "Get intelligent insights about your betting behavior." },
  { title: "Cutting-Edge Protection", description: "Bank-grade encryption for all your data." }
];

const Features = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const featureUIs = [
    <BetSlipScanner />, 
    <InteractiveDashboard />, 
    <SmartAnalytics />, 
    <Security />
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);

  useMotionValueEvent(activeIndex, "change", (latest) => {
    setCurrentIndex(Math.round(latest));
  });

  return (
    <LazyMotion features={domAnimation}>
      <section ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 flex items-center justify-center h-screen">
          <div className="relative w-full max-w-5xl mx-auto px-4">
            <div className="relative z-10">
              <PhoneMockup>
                {featureUIs[currentIndex]}
              </PhoneMockup>
            </div>
            <div className="absolute left-0 right-0 top-[30%] md:top-0 h-full">
              {features.map((feature, index) => {
                const start = index / features.length;
                const end = (index + 1) / features.length;

                const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                const yMobile = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [150, 0, 0, -150]);
                const yDesktop = useTransform(scrollYProgress, [start, start + 0.1], [50, 0]);

                const highlightedDescription = feature.description.split(" ").map((word, i) =>
                  ["Instantly", "95%", "accuracy.", "Track", "real-time", "intelligent", "behavior.", "encryption", "data"].includes(word) ? (
                    <span key={i} className="font-bold text-white">{word} </span>
                  ) : (
                    word + " "
                  )
                );

                return (
                  <m.div
                    key={index}
                    style={{ opacity, y: yMobile }}
                    className={`absolute left-0 right-0 md:top-auto md:bottom-16 md:flex md:items-center md:w-full text-center md:text-left ${index === currentIndex ? 'z-20' : 'z-0'}`}
                  >
                    <div className="hidden md:flex w-full justify-between text-gray-300">
                      <m.div style={{ y: yDesktop }} className="w-1/3 text-right">
                        {index % 2 === 0 && (
                          <>
                            <h3 className="text-2xl font-bold text-green-300 mb-2">{feature.title}</h3>
                            <p className="max-w-sm">{highlightedDescription}</p>
                          </>
                        )}
                      </m.div>
                      <div className="w-1/3"></div>
                      <m.div style={{ y: yDesktop }} className="w-1/3 text-left">
                        {index % 2 !== 0 && (
                          <>
                            <h3 className="text-2xl font-bold text-green-300 mb-2">{feature.title}</h3>
                            <p className="max-w-sm">{highlightedDescription}</p>
                          </>
                        )}
                      </m.div>
                    </div>
                    <div className="md:hidden px-4">
                      <div className={`bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 mx-auto max-w-xs ${index === currentIndex ? 'block' : 'hidden'}`}>
                        <h3 className="text-xl font-bold text-green-300 mb-2">{feature.title}</h3>
                        <p className="text-gray-300 text-sm">{highlightedDescription}</p>
                      </div>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Features;
