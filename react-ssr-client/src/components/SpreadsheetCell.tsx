import React from "react";
import styles from "./ModelixSpreadsheet.module.css";

type SpreadsheetCellProps = React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> & {
    text: string,
    onTextChange?: (newText: string) => void
}

interface SpreadsheetCellState {
    editMode: boolean;
}

export class SpreadsheetCell extends React.Component<SpreadsheetCellProps, SpreadsheetCellState> {

    constructor(props: SpreadsheetCellProps, context: any) {
        super(props, context);
        this.state = {editMode: false};
    }

    render() {
        return <td
            {...this.props}
            onDoubleClick={this.props.onTextChange ? () => this.setState({...this.state, editMode: true}) : undefined}
            className={this.props.className ? `${this.props.className} ${styles.contentCell}` : styles.contentCell}
        >
            {this.props.text}
            {
                !this.state.editMode
                    ? undefined
                    : <input
                        type="text"
                        defaultValue={this.props.text}
                        autoFocus={true}
                        onBlur={(e) => {
                            if (this.props.onTextChange) this.props.onTextChange(e.target.value)
                            this.setState({...this.state, editMode: false});
                        }}
                    />
            }
        </td>;
    }
}
