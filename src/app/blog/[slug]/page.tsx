import SubHero from "@/components/layouts/SubHero";

type Post = {
  title: string;
  primaryImage?: string;
  subTitle: string;
  textOne: string;
  curio?: string;
  textTwo?: string;
  secondaryImage?: string;
  textThree?: string;
  publishDate: string;
};

const getPostData = async (slug: string): Promise<Post> => {
  const post = {
    title: "Wszystko co musisz wiedzieć o masie i budowaniu mięśni",
    subTitle:
      "Jak najkorzystniej przeprowadzić proces masy mięśniowej, tak by uzyskać najlepsze efekty? Sprawdź w tym artykule!",
    textOne: "",
    curio: "",
    textTwo: "",
    image: "",
    textThree: "",
    publishDate: "30-12-2025",
  }; // Replace with actual data fetching logic
  return post;
};

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const postData = await getPostData(params.slug);

  return (
    <div>
      <SubHero
        heading="Blog"
        subHeading="Zapraszamy do przeczytania naszego artykułu"
      />
      <div className="content-max-width">
        <div className="rounded-xl overflow-hidden bg-black/50 w-full aspect-1320/735 pb-16 px-36 flex flex-col justify-end ">
          <h1 className="text-[3.5rem] text-center text-(--color-primary) font-black mb-4 leading-tight italic">
            {postData.title}
          </h1>
          <span className="block text-center text-(--color-brand-blue)">
            {postData.publishDate}
          </span>
        </div>
        <h2 className="text-xl mb-6">{postData.subTitle}</h2>
        <p className="mb-4">{postData.textOne}</p>
        {postData.curio && <p className="mb-4 italic">{postData.curio}</p>}
        {postData.textTwo && <p className="mb-4">{postData.textTwo}</p>}
        {postData.secondaryImage && (
          // <img src={postData.secondaryImage} alt={postData.title} className="my-6" />
          <div className="bg-gray-600 rounded-xl "></div>
        )}
        {postData.textThree && <p className="mb-4">{postData.textThree}</p>}
      </div>
    </div>
  );
};

export default BlogPostPage;
