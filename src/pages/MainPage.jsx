import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getLanguages } from "../redux/actions/translateAction";

const MainPage = () => {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getLanguages());
    },[])
    return (
        <div className="main-page">
            <div className="container">
                <h1>Çevir +</h1>
                <div className="translate-area">
                    <div className="left">
                        <select>
                            <option value="">Seçiniz</option>

                        </select>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <button className="chance-btn">Değiş</button>

                    <div className="right">
                        <select>
                            <option value="">Seçiniz</option>
                        </select>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>

                </div>

                <button className="translate-btn">Çevir</button>

            </div>
        </div>
    )
}

export default MainPage
