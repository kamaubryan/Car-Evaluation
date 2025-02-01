const Features = () => {
  const features = [
    {
      title: "Exclusive Wrecked Vehicles",
      description:
        "Access high-value salvage cars from reputable sellers in a senior marketplace.",
      icon: "car",
    },
    {
      title: "Verified Sellers & Buyers",
      description:
        "Our marketplace ensures only serious buyers and trusted sellers engage in transactions.",
      icon: "shield",
    },
    {
      title: "Competitive Pricing",
      description:
        "Get the best deals on wrecked luxury and performance cars with transparent pricing.",
      icon: "tag",
    },
    {
      title: "Efficient Logistics",
      description:
        "We provide seamless transportation and support for your purchases.",
      icon: "truck",
    },
    {
      title: "Dedicated Support",
      description:
        "Our customer service team is available 24/7 to assist with any inquiries.",
      icon: "support",
    },
    {
      title: "Secure Transactions",
      description:
        "Buy and sell with confidence using our secure payment system.",
      icon: "lock",
    },
  ];

  const icons = {
    car: "M5 13l4 4L19 7",
    shield: "M12 2l8 4v6c0 5-3 9-8 10-5-1-8-5-8-10V6l8-4z",
    tag: "M9 2L2 9l7 7 11-11L9 2zm0 0l5 5",
    truck:
      "M3 16V6a1 1 0 011-1h10m0 11h-3M21 16h-3m-1 0V6a1 1 0 011-1h3l3 5v6m-3 0h3m-3 0h-3",
    support: "M18 15a6 6 0 00-12 0m12 0a6 6 0 11-12 0m12 0h3m-3 0h-3",
    lock: "M12 17a2 2 0 002-2V9a2 2 0 00-4 0v6a2 2 0 002 2z",
  };

  return (
    <section className="bg-white py-12 mt-[10px]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Why Choose Our Marketplace?
        </h2>
        <p className="mt-4 text-gray-600 md:text-lg">
          Experience a seamless way to buy and sell **wrecked high-value cars**
          with complete security and trust.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-500 text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={icons[feature.icon]}
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
