import { useEffect, useState } from "react";
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
      {notepad_list.map((notepad, index) => {
        return (
          <div key={notepad.id} className="flex cursor-pointer hover:bg-slate-100">
            <Link
              to={`/notepad-view/${notepad.id}`}
              className="flex-grow py-4 hover:underline block "
            >
              <span>Id: {notepad.id} / Index: {index}</span>
              <h3 className="font-semibold text-xl">{notepad.title}</h3>
              <p className="text-sm">{notepad.subtitle}</p>
            </Link>
            <div className="flex flex-col align-middle">
              <ButtonDelete
                id={notepad.id}
                reload={true}
                className='w-auto mr-5 md:w-52 hover:underline hover:bg-red-400'
              />
              <button onClick={() => {
                notepad_list.splice(index, 1);
                console.log('aqui');
              }}>teste</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
