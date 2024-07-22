import React, {useRef} from "react";
import * as textEditor from "@modelix/projectional-editor-ssr-client-lib";
import "./ModelixTextEditor.css";

interface ModelixTextFieldProps {
    nodeRef: string
}

export class ModelixTextEditor extends React.Component<ModelixTextFieldProps> {

    private element: HTMLDivElement | null = null

    render() {
        return <div ref={(el) => this.element = el} className="modelix-text-editor" />;
    }

    componentDidMount() {
        textEditor.org.modelix.editor.ssr.client.ClientSideEditorsAPI.createEditor(this.props.nodeRef, this.element)
    }
}
