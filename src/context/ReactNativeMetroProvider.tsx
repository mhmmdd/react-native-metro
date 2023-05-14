import {createContext, JSX} from "react";

export const ReactNativeMetroContext = createContext(null);

type Props = {
  styles?: object;
  children: JSX.Element;
}

export const ReactNativeMetroProvider = ({children}: Props) => {

  return (
    <ReactNativeMetroContext.Provider value={null}>
      {children}
    </ReactNativeMetroContext.Provider>
  );
}
