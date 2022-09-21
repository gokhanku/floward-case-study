import { Link } from "react-router-dom";

const NotFound = () => {
  const classes = {
    pageBody: "h-screen flex bg-gray-bg1",
    formContainer:
      "w-full max-w-md    m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16",
    formHeading: "text-2xl  font-medium text-primary mt-4 mb-12 text-center",
    btnContainer: "flex justify-center items-center mt-6",
    checkbox: "mr-2 h-4 w-4 ",
    input:
      "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out",
    errorText: "text-red mb-4",
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <h1>
        Page not found!{" "}
        <p className="text-lg text-center">
          <Link to="/">Return Main Page</Link>
        </p>{" "}
      </h1>
    </div>
  );
};

export default NotFound;
