import toast from "react-simple-toasts";

export function Mesage(mesage: string, isSucess: boolean){
    const color = isSucess ? 'skyblue' : 'red';
    return toast(<b style={{ color: color }}>{mesage}</b>);
}