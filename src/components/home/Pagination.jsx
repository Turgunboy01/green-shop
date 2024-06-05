const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {currentPage > 1 && (
        <button
          onClick={handlePreviousPage}
          className="px-3 py-2 border rounded bg-white text-gray-800"
        >
          {"<"}
        </button>
      )}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 border rounded ${
              currentPage === page
                ? "bg-green-600 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {page}
          </button>
        );
      })}
      {currentPage < totalPages && (
        <button
          onClick={handleNextPage}
          className="px-3 py-2 border rounded bg-white text-gray-800"
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default Pagination;
