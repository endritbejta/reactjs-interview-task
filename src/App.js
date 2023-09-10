import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Category from "./components/Category";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";

// managing the routes of the app, every {} represents a specific route.
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <div className="main">Please select a category</div>,
      },
      {
        path: ":category",
        element: <Category />,
        children: [
          {
            path: ":noteId",
            element: <Note />,
          },
          {
            path: "create-note",
            element: <CreateNote />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
