import React from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  ViewStyle,
  View
} from "react-native";
import { autobind } from "core-decorators";
import { theme } from "client/theme";

const baseStyle: ViewStyle = {
  flex: 1,
  backgroundColor: theme.BACKGROUND
};

@autobind
export class Layout extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={baseStyle}>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
          <View>{this.props.children}</View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  dismissKeyboard() {
    Keyboard.dismiss();
  }
}