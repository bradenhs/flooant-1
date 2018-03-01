import React from "react";
import {
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Constants } from "expo";
import { theme } from "client/theme";
import { observable, reaction, IReactionDisposer } from "mobx";
import { observer } from "mobx-react";
import { autobind } from "core-decorators";

const padding = 20;
const lineHeight = 20;

const appBarHeight = Constants.statusBarHeight + padding * 2 + lineHeight;
const appHeight = Dimensions.get("window").height;
const buttonTranslateAmount = appHeight / 2;

const styles = StyleSheet.create({
  header: {
    height: appBarHeight,
    zIndex: 2,
    top: 0
  },
  headerText: {
    color: theme.PRIMARY_TEXT,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    paddingTop: Constants.statusBarHeight + padding,
    paddingBottom: padding,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight,
    fontSize: 16
  },
  headerBackground: {
    backgroundColor: theme.PRIMARY,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 1,
    height: 2
  }
});

const HEADER_OPEN = 1;
const HEADER_CLOSED = 0;

@observer
@autobind
export class Header extends React.Component {
  @observable open = false;

  animation = new Animated.Value(this.open ? HEADER_OPEN : HEADER_CLOSED);

  backgroundHeight = this.animation.interpolate({
    inputRange: [HEADER_CLOSED, HEADER_OPEN],
    outputRange: [appBarHeight, appHeight]
  });

  openButtonOpacity = this.animation.interpolate({
    inputRange: [HEADER_CLOSED, HEADER_OPEN],
    outputRange: [1, 0]
  });

  openButtonTranslateY = this.animation.interpolate({
    inputRange: [HEADER_CLOSED, HEADER_OPEN],
    outputRange: [0, buttonTranslateAmount]
  });

  closeButtonOpacity = this.animation.interpolate({
    inputRange: [HEADER_CLOSED, HEADER_OPEN],
    outputRange: [1, 1]
  });

  closeButtonTranslateY = this.animation.interpolate({
    inputRange: [HEADER_CLOSED, HEADER_OPEN],
    outputRange: [-buttonTranslateAmount, 0]
  });

  disposeReaction: IReactionDisposer | null = null;

  componentDidMount() {
    this.disposeReaction = reaction(() => this.open, this.updateAnimation, {
      fireImmediately: true
    });
  }

  componentWillUnmount() {
    if (this.disposeReaction) {
      this.disposeReaction();
    }
  }

  updateAnimation() {
    Animated.spring(this.animation, {
      toValue: this.open ? HEADER_OPEN : HEADER_CLOSED,
      useNativeDriver: true
    }).start();
  }

  render() {
    return (
      <>
        <Animated.View
          style={[
            styles.headerBackground,
            { transform: [{ scaleY: this.backgroundHeight }] }
          ]}
        />
        <TouchableOpacity
          onPress={() => (this.open = !this.open)}
          style={styles.header}
        >
          <Animated.Text
            style={[
              styles.headerText,
              {
                transform: [{ translateY: this.openButtonTranslateY }],
                opacity: this.openButtonOpacity
              }
            ]}
          >
            Open
          </Animated.Text>
          <Animated.Text
            style={[
              styles.headerText,
              {
                opacity: this.closeButtonOpacity,
                transform: [{ translateY: this.closeButtonTranslateY }]
              }
            ]}
          >
            Close
          </Animated.Text>
        </TouchableOpacity>
      </>
    );
  }
}
