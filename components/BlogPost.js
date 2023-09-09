import { EyeEmpty } from 'iconoir-react';
export default function BlogPost({ title, date, views }) {
  return (
    <div className="flex flex-col hover:-mx-2 hover:p-2 transition-all rounded-md duration-200 hover:bg-slate-200">
      <div className="text-gray-500 text-sm">{title}</div>
      <div className="flex text-gray-400 text-xs w-full justify-between">
        <div>{date}</div>
        <div className="flex ">
          {views}
          <EyeEmpty />
        </div>
      </div>
    </div>
  );
}
