import {ImageBasedEditor} from "./ImageBasedEditor";
import {getWebsocketBaseUrl} from "./UrlUtil";
import {ReconnectingWebsocket} from "./ReconnectingWebsocket";
import styles from './ModelixImageBaseEditor.module.css'

export class SVGContainer {

    private editorsSet = new Set<ImageBasedEditor>();

    private connectionStatus: HTMLElement | null = null;
    private socket: ReconnectingWebsocket = new ReconnectingWebsocket(this.element, getWebsocketBaseUrl(this.nodeRef));

    constructor(public readonly element: HTMLElement, public readonly nodeRef: string) {
        this.renderConnectionStatus();
        this.renderEditors();
        this.socket.addStatusListener(connected => this.updateConnectionStatus(connected))
    }

    dispose() {
        this.editorsSet.forEach((editor) => editor.dispose())
    }

    private renderEditors(){
        Array.from(this.element.children).forEach((elem) => {
            if(elem.classList.contains(styles.svgviewer)){
                this.editorsSet.add(new ImageBasedEditor(elem as HTMLElement, this.socket, this.nodeRef));
            }
        })
    }

    private renderConnectionStatus(){
        this.connectionStatus = document.createElement("div");
        this.element.appendChild(this.connectionStatus);
        this.connectionStatus.classList.add(styles.connectionStatus);
        this.updateConnectionStatus(false);
    }

    updateConnectionStatus(connected: boolean): void {
        if (!this.connectionStatus) return
        if (connected) {
            this.connectionStatus.innerText = "Connected";
            this.connectionStatus.style.backgroundColor = "green";
            this.connectionStatus.style.color = "white";
            this.connectionStatus.style.opacity = "0";
        } else {
            this.connectionStatus.innerText = "Disconnected";
            this.connectionStatus.style.backgroundColor = "red";
            this.connectionStatus.style.color = "white";
            this.connectionStatus.style.opacity = "1";
        }
    }
}
