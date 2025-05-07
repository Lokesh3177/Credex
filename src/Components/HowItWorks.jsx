function HowItWorks() {
    const steps = [
      { title: "Upload License", icon: "⬆️" },
      { title: "Get Valuation", icon: "💰" },
      { title: "Get Paid", icon: "🏦" }
    ];
  
    return (
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <div className="text-4xl mb-2">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default HowItWorks;
  