import React from "react";
import {Autocomplete, TextField} from "@mui/material";

interface DropdownOptions {
    entries: DropdownEntry[]
    selectedId: string | undefined
    onChange: any
}

export class Dropdown extends React.Component<DropdownOptions> {

    render() {
        return <Autocomplete
            options={this.props.entries}
            onChange={this.props.onChange}
            value={this.props.entries.find(item => item.id === this.props.selectedId) }
            renderInput={(params) => <TextField {...params} />}
        />;
    }
}

interface DropdownEntry {
    id: string
    label: string
}
