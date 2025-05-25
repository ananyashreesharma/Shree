const Hero = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(https://source.unsplash.com/random/1920x1080)' }}></div>
        <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold mb-4">Hello</h1>
            <p className="text-xl mb-8">Connect with us!</p>
            <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
            Get Started
            </button>
        </div>
        </section>
  );
};

export default Hero;