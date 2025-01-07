import React from "react";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react-native";

import outputs from "./amplify_outputs.json";
import { AppNavigator } from "./src/navigation";

Amplify.configure(outputs);

const App = () => {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <AppNavigator />
      </Authenticator>
    </Authenticator.Provider>
  );
};

export default App;
