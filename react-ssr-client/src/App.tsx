import {Component, SetStateAction, useState} from 'react'
import './App.css'
import {IViewModel} from "./ViewModel.ts";
import {IComponent, IComponentOrText, renderViewModel} from "./components/Base.tsx";
import {registerDefaultComponents} from "./components/DefaultComponents.ts";
import {getWebsocketBaseUrl} from "./main.tsx";
import ReconnectingWebSocket from "reconnecting-websocket";

registerDefaultComponents();

const initialModel: IViewModel = {
    children: [
        {
            component: {
                type: "html.div",
                key: "c1",
                properties: {
                    style: {
                        fontStyle: "italic"
                    }
                },
                children: [{text: "Loading ..."}]
            } as IComponent
        } as IComponentOrText
    ]
}

class App extends Component<{}, { model: IViewModel }> {
    private websocket: ReconnectingWebSocket | undefined;

    constructor(props: {}) {
        super(props);
        this.state = {
            model: initialModel
        }
    }

    render() {
        try {
            return renderViewModel(this.state.model)
        } catch (ex: any) {
            return <pre>{"" + ex}</pre>
        }

    }

    componentDidMount() {
        const url = window.location.port == "43595"
            ? getWebsocketBaseUrl() + "../ws"
            : "ws://localhost:43595/nodes/mps:r%3A0504f20b-ce68-45b3-9a7e-3b50c057323a%28org.modelix.mps.react.sandbox%29%2F1470515121291200936/ws"
        this.websocket = new ReconnectingWebSocket(url, [], {
            maxReconnectionDelay: 5000,
            minReconnectionDelay: 100,
            maxEnqueuedMessages: 0
        })
        this.websocket.addEventListener("message", event => {
            const json = JSON.parse(event.data)
            console.log("Message from server ", json);
            this.setState({ model: json.viewModel })

        });
        if ((window as any).modelix === undefined) {
            (window as any).modelix = {}
        }
        (window as any).modelix.sendMessage = (message: any) => this.websocket?.send(JSON.stringify(message))
    }

    componentWillUnmount() {
        if (this.websocket) {
            this.websocket.close()
            this.websocket = undefined;
        }
    }
}

export default App
