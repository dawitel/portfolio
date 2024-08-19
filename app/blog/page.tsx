import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const Blogpage = () => {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <p className="uppercase tracking-widest text-[10px] text-center text-blue-100 max-w-80">
            Stay tuned for the updates
          </p>
          <TextGenerateEffect
            words="Blogs are comming soon!"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
        </div>
      </main>
    </>
  );
};

export default Blogpage;
