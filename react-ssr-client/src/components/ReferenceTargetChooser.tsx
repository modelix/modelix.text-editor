import React from "react";
import {Autocomplete, TextField} from "@mui/material";

interface ReferenceTargetChooserOptions {
    linkName: string
    entries: CodeCompletionEntry[]
    selected: CodeCompletionEntry | undefined
    stateId: string | undefined
}

export class ReferenceTargetChooser extends React.Component<ReferenceTargetChooserOptions> {

    render() {
        return <Autocomplete
            options={this.props.entries}
            value={this.props.selected}
            onChange={ (this.props.stateId === undefined) ? undefined : (_, value) => {
                (window as any).modelix.sendMessage(
                    {
                        changeState: {
                            key: this.props.stateId,
                            value: value?.target
                        }
                    }
                );
            }}
            renderInput={(params) => <TextField {...params} label={this.props.linkName} />}
        />;
    }
}

interface CodeCompletionEntry {
    label: string
    target: string
}
