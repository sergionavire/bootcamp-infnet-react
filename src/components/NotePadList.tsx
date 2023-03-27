import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonDelete } from "./ButtonDelete";

export type NotePadListType = {
  id: number;
  title: string;
  subtitle: string;
}
type NotepadListProps = {
  notepad_list: NotePadListType[];
};

export function NotePadList({ notepad_list }: NotepadListProps) {
  return (
    <div className="ml-4 divide-y">
      {notepad_list.map((notepad) => {
        return (
          <div className="flex">
            <Link
              key={notepad.id}
              to={`/notepad-view/${notepad.id}`}
              className="flex-grow py-4 hover:cursor-pointer hover:underline block hover:bg-slate-100"
            >
              <span>Id: {notepad.id}</span>
              <h3 className="font-semibold text-xl">{notepad.title}</h3>
              <p className="text-sm">{notepad.subtitle}</p>
            </Link>
            <div className="flex flex-col align-middle">
              <ButtonDelete
                id={notepad.id}
                reload={true}
                className='w-auto mr-5 md:w-52'
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
