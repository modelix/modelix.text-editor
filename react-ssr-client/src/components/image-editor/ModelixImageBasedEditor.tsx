import React from "react";
import {SVGContainer} from "./SVGContainer.ts";
import styles from './ModelixImageBaseEditor.module.css'

interface ModelixTextFieldProps {
    nodeRef: string
}

export class ModelixImageBasedEditor extends React.Component<ModelixTextFieldProps> {

    private element: HTMLDivElement | null = null;
    private svgContainer: SVGContainer | null = null;

    render() {
        return <div ref={(el) => this.element = el} className={styles.svgcontainer}>
            <div className={styles.svgviewer}></div>
        </div>
    }

    componentDidMount() {
        if (this.element != null) {
            this.svgContainer = new SVGContainer(this.element, this.props.nodeRef)
        }
    }

    componentWillUnmount() {
        if (this.svgContainer) {
            this.svgContainer.dispose();
        }
    }
}
