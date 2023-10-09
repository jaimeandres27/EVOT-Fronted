import { Link } from 'react-router-dom';
import logo from '../accessts/logo1.png'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

export default function NavDashboard() {

  const navigate = useNavigate();
  const { authUser } = useAuth();

  console.log(authUser);

  const logout = () => {
    navigate("/home")
  }

  return (
    <>
      <nav class="bg-blue_dark border-b border-blue_dark px-4 py-2.5  fixed left-0 right-0 top-0 z-50">
        <div class="flex flex-wrap justify-between items-center">
          <div class="flex justify-start items-center">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              class="p-2 mr-2 text-white_primary rounded-lg cursor-pointer md:hidden hover:text-blue_dark hover:bg-gray-100 focus:bg-gray-100  focus:ring-2 focus:ring-gray-100 
              focus:text-blue_dark  "
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Toggle sidebar</span>
            </button>
            <Link
              to={"/home"}
              class="flex items-center justify-between mr-4"
            >
              <img
                src={logo}
                class="mr-3 h-8"
                alt="Flowbite Logo"
              />
              <span class="text-white_primary self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Evot Project
              </span>
            </Link>
          </div>
          <div class="flex gap-5 items-center lg:order-2">
            <span class="block text-sm font-semibold text-white_primary">
              {authUser ? authUser.nombre : "UserName"}
            </span>
            <span class="block text-sm text-white_primary truncate ">
              {authUser ? authUser.correo : "Email"}
            </span>
            <button
              onClick={() => logout()}
              class="p-3 block text-sm text-white_primary hover:bg-gray-100 hover:text-blue_dark hover:rounded-md "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                <path d="M15 12h-12l3 -3" />
                <path d="M6 15l-3 -3" />
              </svg>
            </button>
            <Link
              to={"/user/profile"}
              class="flex mx-1 text-sm rounded-full md:mr-0 text-white_primary hover:scale-105"
            >
              <svg  class="icon icon-tabler icon-tabler-user-circle" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
            </Link>
            {/* <!-- Dropdown menu --> */}
          </div>
        </div>
      </nav>
    </>
  );
}
