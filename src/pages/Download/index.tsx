import { useNavigate } from "react-router-dom";
import style from "./styles.module.less";

function Download() {
  const navigate = useNavigate();

  return (
    <div className={style.body}>
      <h1>Download</h1>
      <div onClick={()=>{navigate("/")}}>go to home page</div>
    </div>
  );
}

export default Download;
