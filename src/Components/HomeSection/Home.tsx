import Navbar from "../Navbar/Navbar";
import ColorsAnimation from "./ColorsAnimation";
import hero from "/3trianglenobg.png";

function Home() {
  return (
    <>
      <Navbar />
      <section className="h-screen flex justify-between items-center">
        <div className="w-3/5 flex flex-col justify-center items-center h-full text-start">
          <div className="max-w-2xl p-10">
            <h1 className="bg-gradient-to-tr from-sky-400 to-violet-900 text-8xl inline-block text-transparent bg-clip-text font-medium">
              Drawei
            </h1>
            <h3 className="text-3xl mt-4 mb-2">
              A tool which is a necessity...
            </h3>
            <p className="text-base">
              Integrated with Generative AI and Chat GPT to enable you to use
              our tool more efficiently for your upto date tasks.
            </p>
          </div>
        </div>
        <div className="w-2/5 grid place-content-center">
          <ColorsAnimation />
          <img src={hero} alt="" className="w-96" />
        </div>
      </section>
    </>
  );
}

export default Home;
