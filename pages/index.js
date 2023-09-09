import { SmallShop, Leaderboard, Wallet } from 'iconoir-react';
import BlogPost from '@/components/BlogPost';

const blogList = [
  {
    title: 'Blog One',
    date: '12/12/2023',
    views: 60,
  },
  {
    title: 'Blog Two',
    date: '12/12/2023',
    views: 200,
  },
  {
    title: 'Blog Three',
    date: '12/12/2023',
    views: 50,
  },
  {
    title: 'Blog Four',
    date: '12/12/2023',
    views: 30,
  },
  {
    title: 'Blog Five',
    date: '12/12/2023',
    views: 80,
  },
];

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-slate-200">
        <div className="w-[200px] h-full bg-white p-6 flex flex-col gap-y-10 justify-between">
          <div className="mt-4 flex gap-x-2 ">
            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
            <div className="text-md text-gray-400">Mementeko</div>
          </div>

          <div className="flex  h-full flex-col">
            <div className="flex flex-col gap-y-4">
              <div className="flex cursor-pointer text-gray-600 hover:-mx-2 hover:p-2 transition-all rounded-md duration-200 hover:bg-slate-200 gap-x-2 py-2 items-center">
                <SmallShop className="w-6 h-6" color="currentColor" />
                Store
              </div>
              <div className="flex cursor-pointer text-gray-600 hover:-mx-2 hover:p-2 transition-all rounded-md duration-200 hover:bg-slate-200 gap-x-2 py-2 items-center">
                <Leaderboard className="w-6 h-6" color="currentColor" />
                Dashboard
              </div>
              <div className="flex cursor-pointer text-gray-600 hover:-mx-2 hover:p-2 transition-all rounded-md duration-200 hover:bg-slate-200 gap-x-2 py-2 items-center">
                <Wallet className="w-6 h-6" color="currentColor" />
                Wallet
              </div>
            </div>
            <div className="my-8 h-[1px] bg-slate-200 w-full"></div>
            <div className="flex flex-col gap-y-4">
              {blogList.map((blog, index) => (
                <BlogPost
                  key={index}
                  title={blog.title}
                  date={blog.date}
                  views={blog.views}
                />
              ))}
            </div>
          </div>
          <div className=" flex gap-x-2">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div className="flex flex-col">
              <div className="text-sm text-gray-900">Buzuzima Kun</div>
              <div className="text-sm text-gray-400">@buzuzima</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
