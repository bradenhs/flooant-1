import React from "react";
import { View } from "react-native";
import { TextInput } from "client/text-input";

// const style: StyleProp<Button

export class Login extends React.Component {
  render() {
    return (
      <View
        style={{
          width: 300,
          marginTop: 50
        }}
      >
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          iconName="email-open"
          onFocus={this.handleFocus}
        />
        <View style={{ marginTop: 10 }}>
          <TextInput
            placeholder="Password"
            iconName="lock"
            secureTextEntry
            onFocus={this.handleFocus}
          />
        </View>
      </View>
    );
  }

  handleFocus() {
    console.log("focus");
  }
}
