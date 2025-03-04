import pic from  "../assets/pic.jpg"
import { Link } from "react-router-dom"
function Home() {
  return (
    <div className=" flex flex-col items-center justify-center">
    <section className="text-center mt-16 flex  items-center">
        <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-gray-800 mt-6">Explore Countries with Real-Time Data</h2>
      <p className="mt-4 text-lg text-gray-600 ">
        Discover details about every country around the world – from capitals to regions!
      </p>
      <div className="mt-6 space-x-4">
        <Link to="/Countries" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Explore Now
        </Link>
        <Link to="/About" className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400">
          Learn More
        </Link>
      </div>
        </div>
      <img className="w-[600px] h-[350px] object-cover rounded-lg shadow-lg" src={pic} alt="Country Image" />
     
    </section>
  </div>

  )
}

export default Home
