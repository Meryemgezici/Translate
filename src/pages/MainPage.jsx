import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLanguages, textTranslate } from "../redux/actions/translateAction";
import Select from "react-select";
import { clearTranslate } from "../redux/slices/translateSlice";

const MainPage = () => {
    const dispatch = useDispatch();
    const state = useSelector((store) => store.translateSlice);
    const [sourceLang, setSourceLang] = useState({ value: 'tr', label: 'Turkish' });
    const [targetLang, setTargetLang] = useState({ value: 'en', label: 'English' });
    const [text, setText] = useState("");

    useEffect(() => {
        dispatch(getLanguages());
    }, []);

    const handleChance = () => {
        const chanceSource = targetLang;
        const chancetarget = sourceLang;
        setSourceLang(chanceSource);
        setTargetLang(chancetarget);

        setText("");
        dispatch(clearTranslate());
    }
    return (
        <div className="main-page">
            <div className="container">
                <h1>Çevir +</h1>
                <div className="translate-area">
                    <div className="left">
                        <Select
                             isDisabled={state.isLoading}
                            isLoading={state.isLoading}
                            value={sourceLang}
                            onChange={(e) => setSourceLang(e)}
                            className="select" options={state.languages} />
                        <textarea value={text}
                            onChange={(e) => setText(e.target.value)}
                            name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <button onClick={handleChance} className="chance-btn">Değiş</button>

                    <div className="right">
                        <Select
                            value={targetLang}
                            isDisabled={state.isLoading}
                            isLoading={state.isLoading}
                            onChange={(e) => setTargetLang(e)}
                            className="select" options={state.languages} />
                        <textarea value={state.translate} disabled name="" id="" cols="30" rows="10"></textarea>
                    </div>

                </div>

                <button className="translate-btn" onClick={() => dispatch(textTranslate({ sourceLang, targetLang, text }))}>Çevir</button>

            </div>
        </div>
    )
}

export default MainPage
