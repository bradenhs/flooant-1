import React from "react";
import { style, keyframes } from "typestyle";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { theme } from "../common/theme";

const logoPosition = style({
  position: "absolute",
  width: "100%",
  $nest: {
    svg: {
      color: "blue"
    }
  },
  animationName: keyframes({
    "0%": {
      transform: "scale(.4) translateY(100px)",
      opacity: 0
    },
    "100%": {
      transform: "scale(1) translateY(0px)",
      opacity: 1
    }
  }),
  animationFillMode: "both",
  animationDuration: ".4s",
  animationTimingFunction: "ease-out"
});

const logoContainer = style({
  position: "absolute",
  width: "400px",
  height: "200px",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)"
});

const buttonClassName = style({
  position: "absolute",
  bottom: "10px",
  right: "10px",
  padding: "10px 20px",
  borderRadius: "3px",
  outline: "none",
  border: "none",
  color: theme.FLOOANT_WHITE_1,
  background: theme.FLOOANT_GREEN_1,
  $nest: {
    "&:hover": {
      background: theme.FLOOANT_GREEN_2
    },
    "&:active": {
      background: theme.FLOOANT_GREEN_3
    }
  },
  fontFamily: "Roboto"
});

@observer
export class Website extends React.Component {
  @observable key = 1;

  render() {
    const logoParts: string[] = [
      require("../assets/exports/Logo Part - F.svg"),
      require("../assets/exports/Logo Part - L.svg"),
      require("../assets/exports/Logo Part - 1st O.svg"),
      require("../assets/exports/Logo Part - 2nd O.svg"),
      require("../assets/exports/Logo Part - A.svg"),
      require("../assets/exports/Logo Part - N.svg"),
      require("../assets/exports/Logo Part - T.svg"),
      require("../assets/exports/Logo Part - Swoosh.svg")
    ];
    return (
      <div key={this.key}>
        <div className={logoContainer}>
          {logoParts.map((logoSrc, index) => {
            return (
              <img
                style={{
                  animationDelay: (index !== 7 ? 500 + index * 40 : 600) + "ms",
                  transformOrigin: `${index * 6 + 180}px ${
                    index === 7 ? "10px" : "-100px"
                  }`
                }}
                key={index}
                src={logoSrc}
                className={logoPosition}
              />
            );
          })}
        </div>
        <button className={buttonClassName} onClick={() => this.key++}>
          Replay
        </button>
      </div>
    );
  }
}
