import Table from "../components/Table";
import { useState, useEffect } from "react";
import * as API from "../services/diplomas.service";

export default function () {
  const [document, setDocument] = useState(0);
  const [diplomas, setDiplomas] = useState([]);

  const data = {
    cedula: parseInt(document)
  }

  const getDiplomas = async(e) => {
    e.preventDefault();
    try {
      console.log(document)
      const response = await API.getByDocument(data);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
    console.log(document);
  };

  useEffect(() => {
    getDiplomas;
  }, []);

  return (
    <>
      <main className="grid items-center justify-center w-full h-[100%] my-6">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight  text-center leading-none md:text-5xl xl:text-6xl dark:text-white">
          Busca tú diplomas
        </h1>
        <section className="w-full">
          <div className="mb-6 mt-10 flex w-auto justify-center items-center gap-4">
            <label
              for="id"
              className="block mb-2 text-l font-medium text-gray-900 dark:text-white w-1/2 items-center text-center   "
            >
              Documento
            </label>
            <input
              type="number"
              id="id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="Documento"
              value={document}
              onChange={(e) => {
                setDocument(e.target.value);
              }}
              required
            />
            <button
              onClick={getDiplomas}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
               focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
               dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 
               dark:border-gray-700"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </button>
          </div>
        </section>
        <section className="grid items-center mt-12 ">
          <Table />
        </section>
      </main>
    </>
  );
}
