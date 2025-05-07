function Testimonials() {
    const reviews = [
      { name: "Jane Doe", role: "CTO", company: "TechCorp", feedback: "SoftSell helped us clear old licenses quickly!" },
      { name: "John Smith", role: "IT Admin", company: "BizWorld", feedback: "Amazing platform, very easy to use." }
    ];
  
    return (
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-6 border rounded shadow-sm max-w-sm mx-auto">
              <p className="mb-4">"{review.feedback}"</p>
              <p className="font-bold">{review.name}</p>
              <p className="text-sm">{review.role}, {review.company}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  