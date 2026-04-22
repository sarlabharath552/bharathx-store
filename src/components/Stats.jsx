function Stats() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">

        <div className="bg-white p-10 rounded-3xl shadow">
          <h2 className="text-5xl font-bold">10K+</h2>
          <p className="text-gray-500 mt-3">Happy Customers</p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow">
          <h2 className="text-5xl font-bold">5K+</h2>
          <p className="text-gray-500 mt-3">Orders Delivered</p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow">
          <h2 className="text-5xl font-bold">99%</h2>
          <p className="text-gray-500 mt-3">Satisfaction</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;