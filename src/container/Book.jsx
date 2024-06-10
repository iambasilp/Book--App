import MasterReact from "../assets/book_covers/mastering react.svg";

const Book = () => {
  return (
    <div className="book w-64 h-fit  border border-sky-500 ">
      <div className="book-image">
        <img src={MasterReact} alt="" />
      </div>
      <div className="book-content py-4 px-2 bg-white hover:bg-sky-700 hover:text-white transition-all	 ">
        <h1 className="book-name text-xl font-bold ">
          Mastering React
        </h1>
        <h3 className="book-author text-base">By Anthony Pham</h3>
        <p className="book-description text-sm mt-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          doloribus nulla quidem ullam officia sequi commodi quam velit
          aspernatur voluptas?
        </p>
      </div>
    </div>
  );
};

export default Book;
