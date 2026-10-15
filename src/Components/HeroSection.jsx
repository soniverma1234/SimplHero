   import girl from "../assets/Cozy .png";
const HeroSection = () => {
  return (

    <section className="bg-blue-50">
      <div className="mx-auto grid max-w-6xl items-center py-20 px-6 gap-10 md:grid-cols-2">

         

        <div className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
           <h1>Learn. Build. <br />Grow Your Skills.</h1>
         
         <p className="mt-6 max-w-md text-lg text-gray-600">
          Join thousands of students and take your career to the next level with our courses.
         </p>

         <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 text-xl font-medium text-white hover:bg-blue-900">
            Explore Courses</button>
          <button className="rounded-lg border border-gray-300 text-xl bg-white py-3 px-6 font-medium text-gray-800 hover:bg-gray-100 ">
            Learn More</button>
         </div>

         <div className="flex mt-10 gap-10 ">

          <div>
            <h3 className="text-2xl font-bold text-gray-950">100+</h3>
            <p className="text-sm text-gray-500">Courses</p>
          </div>
                    <div>
            <h3 className="text-2xl font-bold text-gray-950">50K+</h3>
            <p className="text-sm text-gray-500">Students</p>
          </div>

                    <div>
            <h3 className="text-2xl font-bold text-gray-950">4.8</h3>
            <p className="text-sm text-gray-500">Rating</p>
          </div>



         </div>


        </div>
        <div className="relative flex justify-center">


          <img
            src={girl}
            alt="Student"
            className="relative w-full max-w-sm object-contain"
          />
        </div>
      </div>
      
    </section>
  )
}

export default HeroSection
