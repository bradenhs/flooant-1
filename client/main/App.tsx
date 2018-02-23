import React from "react";
import { TextInput } from "client/text-input";
import {
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar
} from "react-native";

const divide = 60;

export class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <StatusBar barStyle="light-content" />
            <View
              style={{
                backgroundColor: "#3fb36d",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: divide + "%"
              }}
            >
              <View
                style={{
                  width: 300,
                  alignSelf: "center",
                  position: "absolute",
                  bottom: 60
                }}
              >
                <TextInput
                  keyboardType="email-address"
                  placeholder="Email"
                  iconName="email-open"
                />
                <View style={{ marginTop: 10 }}>
                  <TextInput placeholder="Password" iconName="lock" />
                </View>
              </View>
            </View>
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: divide + "%",
                bottom: 0,
                backgroundColor: "#4d4d4d",
                paddingTop: 40
              }}
            >
              <TouchableOpacity
                onPress={() => 0}
                style={{
                  backgroundColor: "#4fc37d",
                  elevation: 1,
                  shadowColor: "#444",
                  width: 200,
                  alignSelf: "center",
                  shadowOpacity: 0.3,
                  flexDirection: "row",
                  borderTopColor: "rgba(255,255,255,.3)",
                  borderTopWidth: 1,
                  shadowRadius: 4,
                  marginBottom: 10,
                  shadowOffset: { width: 0, height: 2 },
                  borderRadius: 30
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    lineHeight: 54,
                    fontSize: 18,
                    fontWeight: "900",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
              <Button title="Sign Up" onPress={() => 0} color="#fff" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
