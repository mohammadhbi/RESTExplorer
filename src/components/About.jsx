function About() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="font-extrabold text-4xl">About This Website</h1>
      <div className="flex flex-col gap-y-6 mt-24">
        <p className="w-[800px] text-xl">
          This website uses the{" "}
          <span className="text-blue-600">REST Countries API</span> to display
          comprehensive information about countries from around the world.
        </p>
        <p className="w-[850px] text-xl">
          Explore our data to learn about country names, capitals, regions,
          populations, flags, and much more. Whether you’re curious about a
          particular country or looking for insights about global regions, our
          interactive explorer makes it easy.
        </p>
        <p className="w-[850px] text-xl">
          Our goal is to build a fully responsive and modern web application
          using the latest technologies, including React Router v7 for seamless
          routing and Tailwind CSS for a beautiful, responsive user interface.
        </p>
      </div>
    </div>
  );
}

export default About;
