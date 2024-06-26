export function getWebsocketBaseUrl(nodeRef: string) {
    let url: string
    if(window.location.protocol == "https:") {
        url = "wss://";
    } else  {
        url = "ws://";
    }
    url += `${window.location.hostname}:43596/nodes/${encodeURIComponent(nodeRef)}/image-editor/ws`;
    return url;
}
