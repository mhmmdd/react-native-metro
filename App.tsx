import {Text, View} from "react-native";
import {ReactNativeMetroProvider} from "./src/context/ReactNativeMetroProvider";


const App = () => {

  return (
    <ReactNativeMetroProvider>
      <View style={{flex: 1, padding: 24}}>
        <Text>Hello World!</Text>
      </View>
    </ReactNativeMetroProvider>
  );
}


export default App;
