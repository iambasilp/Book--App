import MasterReact from "../assets/book_covers/mastering react.svg";
import PracticeReact from "../assets/book_covers/practical react.svg";
import Book from "./Book";
const BookShelf = () => {
  const books = [
    {
      id: 1,
      image: MasterReact,
      name: "Mastering React",
      author: "Anthony Pham",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus nulla quidem ullam officia sequi commodi quam velit aspernatur voluptas?",
    },
    {
      id: 2,
      image: PracticeReact,
      name: "Practice React",
      author: "Sarah Smith",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptatibus deleniti fuga veniam sunt molestias aut eum maiores, pariatur recusandae aperiam beatae tempore similique inventore laudantium corporis accusantium ab magni!",
    },
    {
      id: 3,
      image: MasterReact,
      name: "React Hooks in Depth",
      author: "John Doe",
      description:
        "A comprehensive guide to understanding and using React Hooks to manage state and side effects in functional components.",
    },
  ];
  return (
    <div className="book-shelf flex gap-5 justify-center h-full m-auto">
      {books.map((bookItem) => {
        return (
          <Book
            key={bookItem.id}
            bookImage={bookItem.image}
            bookName={bookItem.name}
            bookAuthor={bookItem.author}
            bookDescription={bookItem.description}
          />
        );
      })}
    </div>
  );
};

export default BookShelf;
