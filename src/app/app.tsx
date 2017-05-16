import * as React from "react";

export interface NoProps { }

export default class App extends React.Component<NoProps, {}>{
    render() {
        return (
            <h1>
                Hello world form a React application !
        </h1>
        );
    }
}