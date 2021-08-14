import { Component, createSignal, For } from "solid-js"
import { render } from "solid-js/web";
import Zelo from "../components/zelo";
import RGBA from "../components/rgba";
import "./style.css"

export type BlockData = {
    name: string,
    description: string,
    color: RGBA,
    link: string,
    clickable: boolean,
}

const gameBlocks: BlockData[] = [
    {
        name: "5bHTML",
        description: "the html remake of the flash game BFDIA 5b.",
        color: new RGBA(242, 71, 41),
        link: "https://5b.zelo.dev",
        clickable: true
    },
    {
        name: "Zelocoin",
        description: "incremental game where you make zelocoins",
        color: new RGBA(101, 128, 216),
        link: "https://zolo101.github.io/zelocoin-incremental/src/index.html",
        clickable: true
    },
]

const softwareBlocks: BlockData[] = [
    {
        name: "zfmpe1",
        description: "fast video editing discord bot",
        color: new RGBA(35, 217, 83),
        link: "https://github.com/Zolo101/zfmpe1",
        clickable: true
    },
    {
        name: "Not Enough Servers",
        description: "minecraft mod that makes the serverlist better (1.16 - 1.17)",
        color: new RGBA(255, 255, 255),
        link: "https://modrinth.com/mod/nes",
        clickable: true
    }
]

const otherBlocks: BlockData[] = [
    {
        name: "5beam",
        description: "The portal to 5bHTML's custom levelpacks + API.",
        color: new RGBA(168, 168, 168),
        link: "https://5beam.zelo.dev",
        clickable: true
    },
    {
        name: "thoughtfloat",
        description: "short lived social media",
        color: new RGBA(249, 160, 27),
        link: "https://tf.zelo.dev",
        clickable: true
    }
]

const BlockBoard: Component<{blockarr: BlockData[], title: string}> = (props) => {
    const [title] = createSignal(props.title);
    const [blocks] = createSignal([...props.blockarr]);
    return (
        <div className="board">
            <h2>{title}</h2>
            <div className="blocks">
                <For each={blocks()}>{(block) =>
                    <a href={block.link} target="_blank" rel="noopener">
                        <div className="block" style={`background-color: ${block.color.toString()};box-shadow: 3px 3px 0px 3px ${block.color.brightness(-100).toString()}`}>
                            <span className="name">{block.name}</span>
                            <p className="description">{block.description}</p>
                        </div>
                    </a>
                }</For>
            </div>
        </div>
    );
}

const Index: Component = () => {
    return <div className="index">
        <Zelo/>
        <h1>zelo.dev</h1>
        <BlockBoard blockarr={gameBlocks} title="Games"/>
        <BlockBoard blockarr={softwareBlocks} title="Software"/>
        <BlockBoard blockarr={otherBlocks} title="Other stuff"/>
    </div>
}

render(() => <Index />, document.getElementById("app")!);
