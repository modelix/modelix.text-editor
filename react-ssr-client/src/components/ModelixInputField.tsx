import React from "react";

export class ModelixInputField extends React.Component<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, { valueFromClient?: string, timeout?: any  }> {

    constructor(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
        super(props)
        this.state = {}
    }

    render() {
        const text: string = this.state.valueFromClient
            ?? (typeof this.props.value === "string" ? this.props.value : undefined)
            ?? ""
        return <input
            {...this.props}
            type="text"
            value={text}
            onChange={(event) => {
                const newValue = event.target.value
                const activeTimer = this.state.timeout
                if (activeTimer) {
                    clearTimeout(activeTimer)
                }
                this.setState({
                    valueFromClient: newValue,
                    timeout: setTimeout(() => this.setState({}), 1000)
                })
                this.props.onChange?.call(this, event)
            }}
        />;
    }
}
