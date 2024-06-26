import {TextField, TextFieldProps} from "@mui/material";
import React from "react";

export class ModelixTextField extends React.Component<TextFieldProps, { valueFromClient: unknown | undefined, timeout: any | undefined }> {

    constructor(props: TextFieldProps) {
        super(props)
        this.state = {
            valueFromClient: this.props.value,
            timeout: undefined
        }
    }

    render() {
        return <TextField
            {...this.props}
            value={this.state.valueFromClient ?? this.props.value}
            onChange={(event) => {
                const newValue = event.target.value
                const activeTimer = this.state.timeout
                if (activeTimer) {
                    clearTimeout(activeTimer)
                }
                this.setState({
                    valueFromClient: newValue,
                    timeout: setTimeout(() => this.setState({valueFromClient: undefined, timeout: undefined}), 1000)
                })
                this.props.onChange?.call(this, event)
            }}
        />;
    }
}
