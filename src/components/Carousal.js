// import React from "react";
// // import Swiper JS
// import { Swiper, SwiperSlide } from "swiper/react";
// // import required modules
// import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";


// export default function Carousal() {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       loop={true}
//       keyboard={{
//         enabled: true,
//       }}
//       pagination={{
//         dynamicBullets: true,
//       }}
//       navigation={true}
//       autoplay={{
//         delay: 5000,
//         disableOnInteraction: false,
//       }}
//       modules={[Autoplay, Pagination, Navigation, Keyboard]}
//       className="w-full mb-10 sm:mb-20 p-2"
//     >
//       <SwiperSlide className="flex justify-center items-center overflow-visible">
//         <img
//           src="./carousal/01.png"
//           alt=""
//           className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
//         />
//       </SwiperSlide>
//       <SwiperSlide className="flex justify-center items-center overflow-visible">
//         <img
//           src="./carousal/02.png"
//           alt=""
//           className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
//         />
//       </SwiperSlide>
//       <SwiperSlide className="flex justify-center items-center overflow-visible">
//         <img
//           src="./carousal/03.png"
//           alt=""
//           className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
//         />
//       </SwiperSlide>
//       <SwiperSlide className="flex justify-center items-center overflow-visible">
//         <img
//           src="./carousal/04.png"
//           alt=""
//           className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
//         />
//       </SwiperSlide>
//       <SwiperSlide className="flex justify-center items-center overflow-visible">
//         <img
//           src="./carousal/05.png"
//           alt=""
//           className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
//         />
//       </SwiperSlide>
//       <SwiperSlide className="flex justify-center items-center overflow-visible">
//         <img
//           src="./carousal/06.png"
//           alt=""
//           className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
//         />
//       </SwiperSlide>
//       <SwiperSlide className="flex justify-center items-center overflow-visible">
//         <img
//           src="./carousal/07.png"
//           alt=""
//           className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
//         />
//       </SwiperSlide>
//       <SwiperSlide className="flex justify-center items-center overflow-visible">
//         <img
//           src="./carousal/08.png"
//           alt=""
//           className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
//         />
//       </SwiperSlide>
//       <SwiperSlide className="flex justify-center items-center overflow-visible">
//         <img
//           src="./carousal/09.png"
//           alt=""
//           className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
//         />
//       </SwiperSlide>
//       <SwiperSlide className="flex justify-center items-center overflow-visible">
//         <img
//           src="./carousal/10.png"
//           alt=""
//           className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
//         />
//       </SwiperSlide>
//       <SwiperSlide className="flex justify-center items-center overflow-visible">
//         <img
//           src="./carousal/11.png"
//           alt=""
//           className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
//         />
//       </SwiperSlide>
//     </Swiper>
//   );
// }
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

function Carousal() {
  return (
    <Carousel>
      <Carousel.Item style={{height:"700px"}}>
        <img
          className="d-block w-100 h-100"
          src='https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide</h3>
          <p className='para'>
          At HANDS your Donations and Zakat is being used to aid the communities suffering in the areas affected
          severely by floods all over Pakistan. We facilitate such communities with health, education, livelihood,
          clean water, tents/shelters, food and sanitation. Your contributions are highly appreciated. HANDS is a 
          tax exempted, Shariah compliant non-profit organisation registered under the Society’s Act and has an MOU
          with Economic Affairs Division, Government of Pakistan.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"700px"}}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p className='para'>
          At HANDS your Donations and Zakat is being used to aid the communities suffering in the areas affected
          severely by floods all over Pakistan. We facilitate such communities with health, education, livelihood,
          clean water, tents/shelters, food and sanitation. Your contributions are highly appreciated. HANDS is a 
          tax exempted, Shariah compliant non-profit organisation registered under the Society’s Act and has an MOU
          with Economic Affairs Division, Government of Pakistan.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"700px"}}>
        <img
           width={171}
           height={180}
          className="d-block w-100 h-150"
          src='https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          // src="https://i2.wp.com/youmeandtrends.com/wp-content/uploads/2015/11/beautiful-flowers-pictures-free-download.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className='para'>
          At HANDS your Donations and Zakat is being used to aid the communities suffering in the areas affected
          severely by floods all over Pakistan. We facilitate such communities with health, education, livelihood,
          clean water, tents/shelters, food and sanitation. Your contributions are highly appreciated. HANDS is a 
          tax exempted, Shariah compliant non-profit organisation registered under the Society’s Act and has an MOU
          with Economic Affairs Division, Government of Pakistan.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;