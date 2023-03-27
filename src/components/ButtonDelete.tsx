import { useNavigate } from "react-router-dom";
import { apiNotePad } from "../api/apiNotePad";
import { Button } from "./Button";
import { Mesage } from "./Mesage";

type ButtonDeleteProps = {
    id: Number;
    className?: string;
    reload: boolean;
}

export function ButtonDelete(props: ButtonDeleteProps){
    const navigate = useNavigate();
    return <Button
    className={`bg-red-600 ${props.className}`}
    onClick={async () => {
      const res = await apiNotePad.delete(`/notepads/${props.id}`);
      const deleteNotepadResponse = res.data;

      if (deleteNotepadResponse.success) {
        Mesage('O notepad foi excluído com sucesso', true);
        if (props.reload){
            window.location.reload();
        }
        navigate("/");
      } else {
        Mesage('Houve algum erro na exclusão', false);
      }
    }}
  >
    Delete
  </Button>
}