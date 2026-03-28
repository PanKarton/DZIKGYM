import SubHero from "@/components/layouts/SubHero";
import GradientBlueRed from "@/components/ui/GradientBlueRed";
import ReactMarkdown, { Components } from "react-markdown";

type Post = {
  title: string;
  primaryImage?: string;
  subTitle: string;
  textOne: string;
  curioTitle?: string;
  curio?: string;
  textTwo?: string;
  secondaryImage?: string;
  textThree?: string;
  publishDate: string;
};

// const getPostData = async (slug: string): Promise<Post> => {
const getPostData = async (): Promise<Post> => {
  const post = {
    title: "Wszystko co musisz wiedzieć o masie i budowaniu mięśni",
    subTitle:
      "Jak najkorzystniej przeprowadzić proces masy mięśniowej, tak by uzyskać najlepsze efekty? Sprawdź w tym artykule!",
    primaryImage: "",
    textOne:
      "## Upadek mięśniowy - czym jest i dlaczego dopiero teraz jest o nim głośno?\n\nUpadek mięśniowy to taki stan, w którym Twój mięsień (np. biceps lub triceps) nie jest w stanie wykonać ani jednego powtórzenia więcej w pełnym  zakresie ruchu, przy odpowiedniej technice. Następuje wtedy bardzo  wysokie napięcie mechaniczne i rekrutowane są wysoko progowe jednostki  motoryczne, co ma ogromne znaczenie w budowaniu masy mięśniowej i poprawie siły i masy mięśniowej\n\nBrzmi mądrze i groźne, prawda? To teraz po ludzku:\n\nWyobraź sobie, że robisz serię uginania sztangi na modlitewniku. Przy 8 powtórzeniu myślisz sobie, że już nie dasz rady wykonać ani jednego  ruchu,  przyspiesza Ci oddech, wzrasta ciśnienie, jest Ci gorąco, a  bicepsy zaraz Ci wybuchną. Obok Ciebie stoi jednak Twój ziomek z  telefonem i drze się, że masz zrobić jeszcze 2 ruchy. Jakimś cudem  robisz 9 ruch i choć spięcie trwa 5 sekund - udaje się. Opuszczasz  sztangę szybko w dół.\n\nJeszcze jeden. Wydaje się to nierealne, ale ziom nie odpuszcza.",
    curioTitle: "Ciekawostka / ważne / cytat, itp.",
    curio: "Mądre rzeczy i słowa znanych mędrców",
    textTwo:
      "## Podsumowanie\n\nRobisz 3 głębsze oddechy, nabierasz tyle powietrza ile jesteś w  stanie, napinasz całe ciało i walczysz o ten 10 ruch. W połowie spięcia  masz wrażenie, że sztanga stoi w miejscu, ale jakimś cudem centymetr po  centymetrze jest wyżej. Udaje się, ale po tym nie masz nawet możliwości  spokojnie odłożyć sztangi na stojak. Twoje bicepsy absolutnie odmówiły  posłuszeństwa. To klasyczny przykład ciężkiej serii w ćwiczeniach siłowych z dużym ciężarem i odpowiednim obciążeniem.",
    secondaryImage: "asd",
    textThree:
      "Brawo, osiągnąłeś RIR 0 czyli zaliczyłeś upadek mięśniowy - coś,  czego większość osób na siłowni nigdy realnie nie doświadcza, mimo że  wykonuje regularne ćwiczenia na siłowni.\n\nNigdy nie zdarzyło Ci się przeżyć podobnej serii? To niedobrze - szczególnie jeśli Twoim celem jest zwiększyć siłę i pobudzić różne partie mięśniowe do wzrostu.\n\nWiększość Twoich serii tak wygląda? To jeszcze gorzej.\n\n\Ludzie trenowali do absolutnej odmowy dziesiątki lat temu. Po prostu teraz to mądrze nazwaliśmy.",
    publishDate: "30-12-2025",
  }; // Replace with actual data fetching logic
  return post;
};

const components: Components = {
  h2: ({ children, ...props }) => (
    <h2
      className="text-[2rem] font-extrabold italic leading-[1.2] mb-6"
      {...props}
    >
      {children}
    </h2>
  ),
  p: ({ children, ...props }) => (
    <p className="text-base leading-7 py-1.5" {...props}>
      {children}
    </p>
  ),
};
const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  // const postData = await getPostData(params.slug);
  const postData = await getPostData();

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
        <div className="w-full max-w-4xl mx-auto mt-24">
          <ReactMarkdown components={components}>
            {postData.textOne}
          </ReactMarkdown>
          {postData.curio && (
            <div className="rounded-2xl overflow-hidden pl-6 py-16 my-12 flex justify-center items-center  gap-4 flex-col relative">
              <GradientBlueRed />

              <p className="w-full max-w-160 italic text-(--color-brand-blue) text-[1.5rem] font-black">
                {postData.curioTitle}
              </p>
              <p className="w-full max-w-160 text-(--color-off-primary)">
                {postData.curio}
              </p>
            </div>
          )}
          {postData.textTwo && (
            <ReactMarkdown components={components}>
              {postData.textTwo}
            </ReactMarkdown>
          )}
          {postData.secondaryImage && (
            <div className="bg-gray-600 rounded-xl aspect-644/361 w-full max-w-161 mx-auto my-16  "></div>
          )}
          {postData.textThree && (
            <ReactMarkdown components={components}>
              {postData.textThree}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
