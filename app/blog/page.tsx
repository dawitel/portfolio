import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const Blogpage = () => {
  return (
    <>
      <main className="bg-black-100 flex justify-center mt-64 h-full items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <p className="uppercase items-center justify-center flex tracking-widest text-[10px] text-center text-blue-100 max-w-80">
          Stay tuned for the updates
        </p>
        <TextGenerateEffect
          words="Blogs are comming soon!"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />
      </main>
    </>
  );
};

export default Blogpage;
