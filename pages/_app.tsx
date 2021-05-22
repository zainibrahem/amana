import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import SideBar from '../components/sidebar/sidebar';
import NavBar from '../components/navbar/navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
          <div className="sm:col-span-12 h-13 md:col-span-12 lg:col-span-12 xl:col-span-12">
            <NavBar></NavBar>
          </div>
          <div className="sm:col-span-8 md:col-span-9 lg:col-span-9 xl:col-span-10">
              <Component {...pageProps} />
          </div>
          <div className="hidden sm:block sm:col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-2"><SideBar></SideBar></div>
      </div>
    </div>
  ) 
}

