import React from "react";
import Routes from "./Routes";
import {Provider} from 'react-redux';
import SampleApp from './src/SampleApp'
import store from "./src/store";

const App = () => {
    return (
        <Provider store = {store}>
            <SampleApp />
        </Provider>

    );
};

console.disableYellowBox = true;



export default App;