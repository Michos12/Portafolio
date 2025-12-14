import { useEffect, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const usehandleSubmit =  (e) => {
  //   useEffect( async () => {

  //     e.preventDefault();

  //     await fetch(`http://localhost:4000/api/contact`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //     });

  //     alert("Message sent!");
  //   }),[];
  // }
  const hola = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <form onSubmit={hola} className="flex flex-col gap-4">
        <input
          className="border p-2"
          placeholder="Name"
        />
        <input
          className="border p-2"
          placeholder="Email"
        />
        <textarea
          className="border p-2"
          placeholder="Message"
        />
        <button className="px-6 py-3 bg-blue-600 text-white rounded">
          Send
        </button>
      </form>
    </section>
  );
}
