import React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex-col items-center">
      <header className="py-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600">About 1cliQ</h1>
      </header>

      {/* Mission and Vision */}
      <section className="py-12 px-4 md:px-16 items-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At 1cliQ, our mission is to bridge the gap between home and business owners who need emergent services. We specialize in a wide range of services, including electrical services, solar installations, maintenance....
          </p>
        </div>
      </section>

      {/* Partnering for Sustainability */}
      <section className="bg-blue-600 text-white py-12 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Partnering for Sustainability</h2>
          <p>
            We proudly partner with companies dedicated to sustainability, such as recyclers, to make a positive impact on our environment.
          </p>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-12 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="flex flex-wrap -mx-4">
            {/* CEO */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img src="/ceo.jpg" alt="CEO" className="w-20 h-20 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold">Brett Pretorius</h3>
                <p className="text-gray-600">CEO</p>
              </div>
            </div>

            {/* Marketing Manager */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img src="/marketing-manager.jpg" alt="Marketing Manager" className="w-20 h-20 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold">Jane Smith</h3>
                <p className="text-gray-600">Marketing Manager</p>
              </div>
            </div>

            {/* Product Developer */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img src="/product-developer.jpg" alt="Product Developer" className="w-20 h-20 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold">Michael Johnson</h3>
                <p className="text-gray-600">Product Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
