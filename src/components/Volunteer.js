import React from 'react'
import NavScrollExample from './NavScrollExample'
import '../App.css'

const Volunteer = () => {
  return (
    <div>
        <NavScrollExample/>
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto Section">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Become a Volunteer to Support Flood Affectees</h1>
      <hr style={{height:"36px",top:"20px"}}></hr>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">2022 floods have destroyed thousands of communities across Pakistan. We are looking for determined, energetic individuals to voluntarily support us in several tasks related to flood relief in Sindh, Punjab, KP and Balochistan. Register yourself below.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="number" className="leading-7 text-sm text-gray-600">Contact Number</label>
            <input type="number" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="address" className="leading-7 text-sm text-gray-600">Address</label>
            <input type="address" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <select className="my-4 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false" name="interestedin">
            <option value="">—Please choose an option—</option>
            <option value="Doctors/Health workers">Doctors/Health workers</option>
            <option value="Digital content creators">Digital content creators</option>
            <option value="Content writers">Content writers</option>
            <option value="Data entry operators">Data entry operators</option>
            <option value="Data collectors">Data collectors</option>
            <option value="Community workers">Community workers</option>
            <option value="General volunteers">General volunteers</option>
        </select>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Volunteer
