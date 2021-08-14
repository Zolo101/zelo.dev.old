import { Component, createSignal } from "solid-js";
import ZeloPNG from "../../img/zelo.png";
import ZeloCubeAPNG from "../../img/zelocube.png";

const Zelo: Component = () => {
    const [src, setSrc] = createSignal(ZeloPNG)

    return <img src={src()}
        onmouseover={() => setSrc(ZeloCubeAPNG)}
        onmouseleave={() => setSrc(ZeloPNG)}
        alt="zelo101's profile picture"
        width="256" height="256"
    ></img>
}

export default Zelo;