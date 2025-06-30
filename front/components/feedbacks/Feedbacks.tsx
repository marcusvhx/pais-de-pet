import FeedbackContainer from "./FeedbacksContainer";

export default function Feedbacks({}: {}) {
  return (
    <section
      id="feedbacks"
      className="w-full py-5 flex flex-col items-center gap-4 overflow-x-hidden"
    >
      <h1 className="font-semibold text-lg">
        Depoimentos dos nossos pais de pet
      </h1>
      <FeedbackContainer />
    </section>
  );
}
