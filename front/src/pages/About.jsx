import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold">About MyShop</h1>

          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            MyShop is a modern ecommerce web application built to deliver a
            clean, responsive, and smooth shopping experience across all
            devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800">Creator</h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              This project was designed and developed by{" "}
              <span className="font-semibold text-black">Deepak</span>.
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed">
              The goal of this project was to practice full-stack web
              development concepts and build a modern ecommerce UI using real
              API data.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800">Tech Stack</h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "Tailwind CSS",
                "React Router",
                "Axios",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-black text-white px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-5 text-gray-600">
              Built using the MERN stack with responsive frontend design and
              reusable React components.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800">Features</h2>

            <ul className="mt-5 space-y-3 text-gray-600">
              <li>✅ Responsive Ecommerce UI</li>
              <li>✅ Product Search Functionality</li>
              <li>✅ Add to Cart System</li>
              <li>✅ Dynamic Product Pages</li>
              <li>✅ Mobile Friendly Design</li>
              <li>✅ API-based Product Data</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800">
              Project Purpose
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              This project was created for learning and portfolio purposes. It
              focuses on improving frontend development, state management, API
              handling, routing, and responsive design skills.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The application demonstrates how modern ecommerce websites are
              structured using React and backend technologies from the MERN
              ecosystem.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm">
          © 2026 MyShop — Built by Deepak
        </div>
      </div>
    </div>
  );
}

export default About;
