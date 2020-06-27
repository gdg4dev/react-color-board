import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorBoard.css";

export default class ColorBoard extends Component {
    state;
    render() {
        let boxes = Array.from({
            length: 18,
        }).map((e) => (
            <ColorBox />
        ));
        return <div className="ColorBoard">{boxes} </div>;
    }
}
