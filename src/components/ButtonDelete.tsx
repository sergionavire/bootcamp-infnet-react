import { useNavigate } from "react-router-dom";
import { apiNotePad } from "../api/apiNotePad";
import { Button } from "./Button";
import { message } from "../utils/message";

type ButtonDeleteProps = {
  id: Number;
  className?: string;
  reload: boolean;
};

export function ButtonDelete(props: ButtonDeleteProps) {
  const navigate = useNavigate();
  return (
    <Button
      className={`bg-red-600 ${props.className}`}
      onClick={async () => {
        const res = await apiNotePad.delete(`/notepads/${props.id}`);
        const deleteNotepadResponse = res.data;

        if (deleteNotepadResponse.success) {
          message("O notepad foi excluído com sucesso", true);
          if (props.reload) {
            window.location.reload();
          }
          navigate("/");
        } else {
          message("Houve algum erro na exclusão", false);
        }
      }}
    >
      Delete
    </Button>
  );
}
