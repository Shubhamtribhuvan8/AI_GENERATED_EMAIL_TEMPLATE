import React from "react";
import { Zap, CheckCircle, FileSearch } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Experience the power of AI that delivers results in mere seconds, transforming your workflow.",
  },
  {
    icon: CheckCircle,
    title: "Unmatched Precision",
    description:
      "Our cutting-edge AI technology guarantees top-notch accuracy in detecting any discrepancies.",
  },
  {
    icon: FileSearch,
    title: "Comprehensive Insights",
    description:
      "Obtain in-depth reports that not only highlight potential issues but also provide source references.",
  },
];

const Features = (props) => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Essential Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 border p-4 rounded-lg"
            >
              <feature.icon className="h-8 w-8 mb-2 text-primary" />
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
