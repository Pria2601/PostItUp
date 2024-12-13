import './App.css';
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Create from './create';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogDetails from './BlogDetails';


function App() {
  // const title = 'welcome to new blog';
  // const link = "http:www.google.com";
  // const notify = () => toast("Wow so easy!");
  const notify = () => {
    toast.success('🦄 finally it worked ! ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    };
  const router=createBrowserRouter([
    {
      path:'/',
      element:<>
      <Navbar/>
      <button className='btton' onClick={notify}>Notify!</button>
      <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
              />
              <ToastContainer/>

      <Home/>
      </>
    },
    {
      path:'/create',
      element:<>
      <Navbar/>
     
      <Create/>
      </>
    },
    {
      path:'/blogs/:id',
      element:<>
      <Navbar/>
      <BlogDetails/>
      </>
    }
  ])

  return (
    <div className="App">
      {/* <Navbar/>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
              />
              <ToastContainer/> */}

 {/* Same as */}


      <div className="content">
        <RouterProvider router={router}/>
        {/* <Home/> */}
       
      </div>

    </div>
  );
}

export default App;
