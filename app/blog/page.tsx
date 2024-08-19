import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const Blogpage = () => {
  return (
    <>
      <p className="uppercase tracking-widest text-[10px] text-center text-blue-100 max-w-80">
       Stay tuned
      </p>
      <TextGenerateEffect
        words="Blogs are comming soon!"
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
      />
    </>
  );
};

export default Blogpage;
