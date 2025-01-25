import React, {Attributes} from 'react'
import {IViewModel} from "../ViewModel.ts";

export interface IComponent extends IComponentContainer {
    type: string
    key: string | undefined
    properties: object | undefined
}

export interface IComponentContainer {
    children: IComponentOrText[] | undefined
}

export interface IComponentOrText {
    component: IComponent | undefined
    text: string | undefined
}


export interface IComponentWrapper {
    component: IComponent
}

export abstract class ComponentBase<S = {}, SS = any> extends React.Component<IComponentWrapper, S, SS>  {
    protected renderChildComponents(): (JSX.Element | string)[] {
        return renderChildComponents(this.props.component)
    }
}

function convertComponent(component: IComponent): IComponent {
    const convertedProps = jsonToProps(component.properties)
    if (convertedProps === component.properties) return component
    return {
        ...component,
        properties: convertedProps
    }
}

function jsonToProps(json: Record<string, any> | undefined): Record<string, any> | undefined {
    if (json === undefined) return json;

    let result = json;

    for (const key in json) {
        const value = json[key]
        if (typeof value == "object" && value != null) {
            if (typeof value.jsCode == "string") {
                const code = eval(value.jsCode);
                result = {
                    ...result,
                    [key]: code
                }
            } else if (typeof value.type == "string") {
                const comp = createComponentFromJson(value)
                result = {
                    ...result,
                    [key]: comp
                }
            }
        }
    }

    return result
}

export function createComponentFromJson(component: IComponent | string) {
    if (typeof component == "string") {
        return component
    } else {
        const renderer = componentConstructors.get(component.type);
        if (renderer) {
            return React.createElement(renderer, { component: convertComponent(component), key: component.key } as IComponentWrapper & Attributes)
        } else {
            return (<span>Unknown component type: "{component.type}"</span>);
        }
    }
}

function renderChildComponents(parent: IComponentContainer) {
    if (parent.children) {
        return parent.children.map(componentData => createComponentFromJson(componentData.component ?? componentData.text!!));
    } else {
        return [];
    }
}

export function renderViewModel(model: IViewModel) {
    return <div>{renderChildComponents(model)}</div>
}

export class ViewModelRenderer extends React.Component<{ model: IViewModel }> {

    render() {
        return <>{renderChildComponents(this.props.model)}</>;
    }
}

export const componentConstructors: Map<string, any> = new Map();

export function registerComponentConstructor(type: string, ctor: any) {
    componentConstructors.set(type, ctor)
}
