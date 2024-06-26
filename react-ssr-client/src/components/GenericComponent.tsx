import React from "react";
import {ComponentBase, IComponentWrapper} from "./Base.tsx";

export class GenericComponent extends ComponentBase {
    private elementType: any

    constructor(elementType: any, props: IComponentWrapper) {
        super(props);
        this.elementType = elementType;
    }

    render() {
        return React.createElement(this.elementType, this.props.component.properties ?? {}, ...this.renderChildComponents())
    }
}
