import React from "react";
import {
  TextInput as RNTextInput,
  TextStyle,
  ViewStyle,
  TouchableWithoutFeedback,
  View,
  TextInputProperties
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { autobind } from "core-decorators";
import { theme } from "client/theme";

const inputStyle: TextStyle = {
  paddingHorizontal: 20,
  paddingVertical: 15,
  flexGrow: 1,
  color: "#4d4d4d",
  fontSize: 18
};

const inputStyleWithIcon: TextStyle = {
  ...inputStyle,
  paddingLeft: 0
};

const iconStyle = {
  padding: 16
};

const containerStyle: ViewStyle = {
  backgroundColor: "#fff",
  elevation: 1,
  shadowColor: "#444",
  shadowOpacity: 0.3,
  flexDirection: "row",
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
  borderRadius: 3,
  zIndex: 1
};

interface Props extends TextInputProperties {
  iconName?: string;
  style?: ViewStyle;
  errors?: string[];
  warnings?: string[];
  notes?: string[];
}

@autobind
export class TextInput extends React.PureComponent<Props> {
  input: RNTextInput | null = null;

  render() {
    let {
      iconName,
      children,
      errors,
      warnings,
      notes,
      style,
      ...props
    } = this.props;

    const mergedProps: TextInputProperties = {
      autoCapitalize: "none",
      spellCheck: false,
      autoCorrect: false,
      keyboardAppearance: theme.KEYBOARD_APPEARANCE,
      ...props
    };

    return (
      <View>
        <TouchableWithoutFeedback onPress={this.handleContainerPress}>
          <View
            style={{
              ...containerStyle,
              ...style
            }}
          >
            {iconName && (
              <MaterialCommunityIcons
                style={iconStyle}
                name={iconName}
                size={18}
                color={theme.SECONDARY}
              />
            )}
            <RNTextInput
              ref={this.assignRef}
              {...mergedProps}
              style={{
                ...(iconName ? inputStyleWithIcon : inputStyle)
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  handleContainerPress() {
    if (this.input === null) {
      return;
    }

    this.input.focus();
  }

  assignRef(input: any) {
    if (input !== null) {
      this.input = input;
    }
  }
}
