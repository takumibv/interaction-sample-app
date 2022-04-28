import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CardData } from "../../features/card/types";

type Props = {
  id: string;
  cardData: CardData;
};

export default function CardPage({}: Props) {
  const router = useRouter();

  const { id } = router.query;

  // const { data: task, mutate } = useSWR<Task>(
  //   `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}`,
  //   (url: string) => axios.get(url).then((res) => res.data),
  //   {
  //     fallbackData: cardData,
  //   }
  // );

  // useEffect(() => {
  //   mutate();
  // }, []);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      id: {id}
      {/* <span className="mb-4">
        {"ID : "}
        {task.id}
      </span>
      <p className="mb-4 text-xl font-bold">{task.title}</p>
      <p className="mb-12">{task.created_at}</p>
      <Link href="/task-page" passHref>
        <div className="flex cursor-pointer mt-8">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>Back to task-page</span>
        </div>
      </Link> */}
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = await getAllTaskIds();

//   return {
//     paths,
//     // fallback: true → 新規のidにアクセスしたときにサーバー側で更新してくれる(ISR)
//     // fallback: false → 新規のidにアクセスしたときに404ページを表示する
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
//   //   const task = await getTaskData(`${params?.id}`);
//   //   console.log(task);
//   //   return {
//   //     props: {
//   //       id: `${params?.id ?? ""}`,
//   //       cardData: task,
//   //     },
//   //     // ISR で更新するために必要
//   //     // revalidate: 3 → 3秒後に再度更新する
//   //     revalidate: 3,
//   //   };
//   return {
//     props: {
//       id: `${params?.id ?? ""}`,
//       cardData: {} as CardData,
//     },
//   };
// };
