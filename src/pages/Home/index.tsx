import { useNavigate } from "react-router-dom";
import style from "./styles.module.less";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={style.home}>
      <h1>HOME</h1>
      <div
        onClick={() => {
          navigate("/download");
        }}
      >
        go to download page
      </div>
    </div>
  );
}

export default Home;
