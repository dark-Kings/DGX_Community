import React from 'react'
import { images } from '../constant/index.js';

const Register = () => {
  return (
    <div className="my-8">
      <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-2xl border border-DGXgreen dark:bg-gray-800">
        <h1 class="text-xl font-bold text-white capitalize text-center dark:text-white">Welcome to the <span className='text-DGXgreen'>DGX Community</span></h1>
        <form>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 sm:grid-cols-2">
            <div className="">
              <div>
                <label class="text-white dark:text-gray-200" for="username">Username</label>
                <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="username">College Name</label>
                <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
              </div>
            </div>

            <div className="flex justify-center items-center order-first md:order-none">
              <img src={images.robo} className="w-28" />
            </div>

            <div>
              <div>
                <label class="text-white dark:text-gray-200" for="password">Contact Number</label>
                <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Designation</label>
                <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Create Password</label>
                <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
              </div>
            </div>
            <div>
              <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Email Id</label>
                <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Category</label>
                <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Confirm Password</label>
                <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-6">
            
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none  bg-DGXgreen focus:bg-gray-600">Register</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Register