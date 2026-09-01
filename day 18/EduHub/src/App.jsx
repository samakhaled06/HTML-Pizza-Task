import './App.css'
import Home from './components/Home/Home'
import Send from './components/Send/Send'
import Gallery from './components/Gallery/Gallery'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Dogs from './components/Dogs/Dogs'
import NotFound from './components/NotFound/NotFound'
import Cats from './components/Cats/Cats'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'gallery', element: <Gallery />, children: [{ path: 'dogs', element: <Dogs /> },
          { path: 'cats', element: <Cats /> }
          ]
        },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'send', element: <Send /> },
        {path:'*',element:<NotFound/>}
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App