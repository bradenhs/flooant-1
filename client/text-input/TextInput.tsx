import React from "react";
import {
  TextInput as RNTextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
  View,
  KeyboardType
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { autobind } from "core-decorators";

const inputStyle: StyleProp<TextStyle> = {
  paddingHorizontal: 20,
  paddingVertical: 15,
  flexGrow: 1,
  color: "#4d4d4d",
  fontSize: 18
};

const inputStyleWithIcon: StyleProp<TextStyle> = {
  ...inputStyle,
  paddingLeft: 0
};

const iconStyle: StyleProp<any> = {
  padding: 16
};

const containerStyle: StyleProp<ViewStyle> = {
  backgroundColor: "#fff",
  elevation: 1,
  shadowColor: "#444",
  shadowOpacity: 0.3,
  flexDirection: "row",
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
  borderRadius: 3
};

interface Props {
  value?: string;
  placeholder?: string;
  iconName?: string;
  onChangeText?(value: string): void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
  onFocus?: () => void;
}

@autobind
export class TextInput extends React.PureComponent<Props> {
  render() {
    const {
      value,
      onChangeText,
      placeholder,
      iconName,
      secureTextEntry,
      onFocus
    } = this.props;

    return (
      <View style={containerStyle}>
        {iconName && (
          <MaterialCommunityIcons
            style={iconStyle}
            name={iconName}
            size={18}
            color="#4d4d4d"
          />
        )}
        <RNTextInput
          placeholder={placeholder}
          value={value}
          autoCapitalize="none"
          onFocus={onFocus}
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          style={iconName ? inputStyleWithIcon : inputStyle}
        />
      </View>
    );
  }
}
