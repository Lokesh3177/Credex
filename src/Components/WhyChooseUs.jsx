function WhyChooseUs() {
    const features = [
      { icon: "⚡", text: "Instant Valuation" },
      { icon: "🔒", text: "Secure Transfers" },
      { icon: "💼", text: "Trusted by 1K+ clients" },
      { icon: "📞", text: "24/7 Support" }
    ];
  
    return (
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded shadow">
              <div className="text-3xl">{feature.icon}</div>
              <p className="mt-2">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default WhyChooseUs;
  