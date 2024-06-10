const Book = ({ bookImage, bookName, bookAuthor, bookDescription }) => {
  return (
    <div className="book w-64 h-fit  border border-sky-500 ">
      <div className="book-image">
        <img src={bookImage} alt="Book Image" />
      </div>
      <div className="book-content py-4 px-2 bg-white hover:bg-sky-700 hover:text-white transition-all ">
        <h1 className="book-name text-xl font-bold ">{bookName}</h1>
        <h3 className="book-author text-base">{bookAuthor}</h3>
        <p className="book-description text-sm mt-2 ">
        {bookDescription}
        </p>
      </div>
    </div>
  );
};

export default Book;
