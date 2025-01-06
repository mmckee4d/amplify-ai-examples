import React from "react";
import { SafeAreaView } from "react-native";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react-native";

import outputs from "./amplify_outputs.json";
import { Header } from "./components/common/Header";

Amplify.configure(outputs);

const App = () => {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaView>
          <Header />
        </SafeAreaView>
      </Authenticator>
    </Authenticator.Provider>
  );
};

export default App;
