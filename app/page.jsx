import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>Thoughts, Ideas, Prompts</span>
    </h1>
    <p className='desc text-center'>
      ThinkTank is an open-source tool for modern world to
      discover, create and share creative thoughts, ideas, prompts.
    </p>

    <Feed />
  </section>
  );
}

export default Home
