function Pagination({
  currentPage,
  setCurrentPage,
  totalPages
}) {
  return (
    <div className="flex justify-center gap-3 mt-14">

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() =>
            setCurrentPage(i + 1)
          }
          className={`h-12 w-12 rounded-full ${
            currentPage === i + 1
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}

    </div>
  );
}

export default Pagination;