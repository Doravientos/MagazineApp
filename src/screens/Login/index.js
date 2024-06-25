import React from "react";
import styled from "styled-components/native";
import RoundButton from "../../components/generic/RoundButton";
import TextInput from "../../components/generic/TextInput";
import { AuthContext } from "../../contexts/AuthContext";

const ViewContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function Login({ navigation }) {
  const { signIn } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const onSubmit = () => {
    if (email && password) {
      signIn(email, password);
    }
  };

  return (
    <ViewContainer>
      <TextInput
        value={email}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={setEmail}
      />

      <TextInput
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <RoundButton onPress={onSubmit} title="Login" />
      <RoundButton
        onPress={() => navigation.navigate("Signup")}
        title="Register"
      />
    </ViewContainer>
  );
}
