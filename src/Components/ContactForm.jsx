import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
      <form className="max-w-xl mx-auto grid gap-4 bg-white p-6 rounded shadow">
        <input name="name" placeholder="Name" onChange={handleChange} required className="p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="p-2 border rounded" />
        <input name="company" placeholder="Company" onChange={handleChange} required className="p-2 border rounded" />
        <select name="type" onChange={handleChange} required className="p-2 border rounded">
          <option value="">Select License Type</option>
          <option>Software</option>
          <option>SAAS</option>
          <option>Enterprise</option>
        </select>
        <textarea name="message" placeholder="Message" onChange={handleChange} required className="p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
