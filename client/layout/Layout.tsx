import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  ViewStyle
} from "react-native";
import { theme } from "client/theme";
import { autobind } from "core-decorators";
import { Constants } from "expo";

const topPaneStyle: ViewStyle = {
  backgroundColor: theme.GREEN,
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  paddingTop: Constants.statusBarHeight,
  justifyContent: "center"
};

const bottomPaneStyle: ViewStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: theme.BLACK,
  justifyContent: "center"
};

interface Props {
  topPane: React.ReactNode;
  bottomPane: React.ReactNode;
  division: number;
}

@autobind
export class Layout extends React.Component<Props> {
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          backgroundColor: theme.BLACK
        }}
      >
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                ...topPaneStyle,
                height: this.props.division + "%"
              }}
            >
              {this.props.topPane}
            </View>
            <View
              style={{
                ...bottomPaneStyle,
                top: this.props.division + "%"
              }}
            >
              {this.props.bottomPane}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  dismissKeyboard() {
    Keyboard.dismiss();
  }
}
