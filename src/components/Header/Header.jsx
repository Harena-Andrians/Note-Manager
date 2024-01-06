import { useNavigate } from "react-router-dom"
import s from "./style.module.css"
import { Journals, PlusCircle } from "react-bootstrap-icons"
export function Header(){
    const navigate = useNavigate()
    return<>
        <div className={s.container}>
            <div className={s.logo} onClick={()=>navigate("/")}><Journals size={35} className={s.JournalsIcons}/>My note</div>
            <div className={s.add} onClick={()=>navigate("/note/new")}><PlusCircle size={25} className={s.plus}/><span className={s.addMore}>Add More</span></div>
        </div>
    </>
}