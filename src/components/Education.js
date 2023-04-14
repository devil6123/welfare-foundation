import React from 'react'
import NavScrollExample from './NavScrollExample'

const Education = () => {
    return (
        <div>
            <NavScrollExample />
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div class="sm:w-1/2 mb-10 px-4">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1573169790341-483eec303e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            </div>
                            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
                            <p class="leading-relaxed text-base">Under this program, Alkhidmat offers Alfalah scholarships to talented students, takes care of street and deserving children by providing them with free of cost school books, stationery and uniform. Managing schools and 72 madaris under its aegis where quality is imparted on modern lines and in accordance with Islamic values. Hostel facilities are also offered to students from other cities..</p>
                            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                        </div>
                        <div class="sm:w-1/2 mb-10 px-4">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1490424660416-359912d314b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            </div>
                            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
                            <p class="leading-relaxed text-base">Under this program, Alkhidmat offers Alfalah scholarships to talented students, takes care of street and deserving children by providing them with free of cost school books, stationery and uniform. Managing schools and 72 madaris under its aegis where quality is imparted on modern lines and in accordance with Islamic values. Hostel facilities are also offered to students from other cities..</p>
                            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education
