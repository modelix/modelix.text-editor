import React from "react";
import {IconButton, Menu, MenuItem, SvgIcon} from "@mui/material";
import styles from './ModelixSpreadsheet.module.css'
import {Add} from "@mui/icons-material";
import {SpreadsheetCell} from "./SpreadsheetCell.tsx";
import {createComponentFromJson, IComponent} from "./Base.tsx";

export interface ModelixSpreadsheetProperties extends ColumnsContainer {
    title?: string
    rows?: RowData[]
    addColumn?: (index: number) => void
    addRow?: (index: number) => void
    actions?: ContextMenuEntry[]
}

export interface RowData {
    key?: string
    actions?: ContextMenuEntry[]
    cells?: Record<string, CellData | string>
}

export interface ContextMenuEntry {
    label: string
    action?: () => void
}

export interface CellData {
    value?: string | IComponent | null
    onChange?: (newValue: string) => void
}

export interface ColumnsContainer {
    columns: ColumnOrGroup[]
}

export interface ColumnOrGroup {
    label?: string
    onLabelChange?: (newValue: string) => void
    actions?: ContextMenuEntry[]
}

export interface ColumnGroup extends ColumnOrGroup, ColumnsContainer {
}

function isColumnGroup(obj: ColumnOrGroup): obj is ColumnGroup {
    return (obj as ColumnGroup).columns !== undefined;
}

export interface Column extends ColumnOrGroup {
    name: string,
}

export interface ModelixSpreadsheetState {
    contextMenuPosition?: {
        x: number;
        y: number;
    }
    contextMenuEntries: ContextMenuEntry[]
}

export class ModelixSpreadsheet extends React.Component<ModelixSpreadsheetProperties, ModelixSpreadsheetState> {


    constructor(props: ModelixSpreadsheetProperties, context: any) {
        super(props, context);
        this.state = {
            contextMenuEntries: []
        }
    }

    private handleContextMenu = (event: React.MouseEvent, entries?: ContextMenuEntry[]) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            contextMenuPosition: {
                x: event.clientX + 2,
                y: event.clientY - 6,
            },
            contextMenuEntries: entries ?? []
        });
    };

    private handleClose = () => {
        this.setState({
            ...this.state,
            contextMenuPosition: undefined
        })
    };

    public getTotalColumns(): number {
        return this.props.columns.reduce((sum, c) => sum + this.countColumns(c), 0)
    }

    public getColumnLevels(): number {
        return this.props.columns.reduce((max, c) => Math.max(max, this.countColumnLevels(c)), 0);
    }

    public getColumnDimensions(): { cols: number, rows: number } {
        return this.props
            .columns.reduce((acc, c) => {
                const cd = this.calcColumnDimensions(c);
                return {cols: acc.cols + cd.cols, rows: Math.max(acc.rows, cd.rows)}
            }, {cols: 0, rows: 0});
    }

    private countColumns(columnOrGroup: ColumnOrGroup): number {
        if (isColumnGroup(columnOrGroup)) {
            return columnOrGroup.columns.reduce((sum, c) => sum + this.countColumns(c), 0);
        } else {
            return 1;
        }
    }

    private countColumnLevels(columnOrGroup: ColumnOrGroup): number {
        if (isColumnGroup(columnOrGroup)) {
            return columnOrGroup.columns.reduce((max, c) => Math.max(max, this.countColumnLevels(c)), 0) + 1;
        } else {
            return 1;
        }
    }

    private calcColumnDimensions(columnOrGroup: ColumnOrGroup): { cols: number, rows: number } {
        if (isColumnGroup(columnOrGroup)) {
            const childrenDimension = columnOrGroup
                .columns.reduce((acc, c) => {
                    const cd = this.calcColumnDimensions(c);
                    return {cols: acc.cols + cd.cols, rows: Math.max(acc.rows, cd.rows)}
                }, {cols: 0, rows: 0});
            return {cols: Math.max(1, childrenDimension.cols), rows: childrenDimension.rows + 1};
        } else {
            return {cols: 1, rows: 1};
        }
    }

    private getLastColumn(): Column | undefined {
        let allColumns = this.getFlattenedColumns();
        if (allColumns.length == 0) return undefined;
        return allColumns[allColumns.length - 1];
    }

    private getFlattenedColumns(): Column[] {
        return this.props.columns.flatMap((c) => this.flattenColumns(c))
    }

    private flattenColumns(columnOrGroup: ColumnOrGroup): Column[] {
        if (isColumnGroup(columnOrGroup)) {
            return columnOrGroup.columns.flatMap((c) => this.flattenColumns(c))
        } else {
            return [columnOrGroup as Column]
        }
    }

    private numberToLetters(num: number) {
        let letters = ''
        while (num >= 0) {
            letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + letters
            num = Math.floor(num / 26) - 1
        }
        return letters
    }

    render() {
        let columns = this.getFlattenedColumns();
        let rows = this.props.rows ?? [];
        return <div style={{margin: "10px"}}>
            {/*<input style={{border:"0", textAlign: "center"}} placeholder="Title" value={this.props.title} />*/}
            <table className={styles.table}>
                <thead>
                <tr className={styles.columnNumbersRow}>
                    <td>
                        <IconButton onContextMenu={(e) => this.handleContextMenu(e, this.props.actions)} style={{padding: "0", border: "0.5px solid #ccc"}}>
                            <SvgIcon fontSize="small">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1}
                                    stroke="currentColor"
                                >
                                    <circle r={6} cx={12} cy={12}/>
                                </svg>
                            </SvgIcon>
                        </IconButton>
                    </td>
                    <td></td>
                    {
                        columns.map((column, columnIndex) => {
                            return <td
                                className={styles.columnNumber}
                                onContextMenu={(e) => this.handleContextMenu(e, column.actions)}
                            >{this.numberToLetters(columnIndex)}</td>
                        })
                    }
                    <td>
                        <IconButton onClick={parameterizedHandler(columns.length, this.props.addColumn)} style={{marginLeft: "5px", padding: "0", border: "0.5px solid #ccc"}}>
                            <Add fontSize="small"></Add>
                        </IconButton>
                    </td>
                </tr>
                <tr>
                    <td colSpan={1000000} height={10}></td>
                </tr>
                <tr>
                    <td className={styles.rowNumber}></td>
                    <td className={styles.rowNumberSpacer}></td>
                    <td className={styles.title} colSpan={this.getColumnDimensions().cols}>{this.props.title}</td>
                </tr>

                <tr>
                    <td className={`${styles.rowNumberRegular} ${styles.rowNumber}`}>1</td>
                    <td className={styles.rowNumberSpacer}></td>
                    {
                        columns.map((c) =>
                            <SpreadsheetCell
                                key={c.name}
                                className={styles.colHeader}
                                text={c.label ?? c.name}
                                onTextChange={parseHandler(c.onLabelChange)}
                            >{c.label ?? c.name}</SpreadsheetCell>
                        )
                    }
                </tr>
                </thead>
                <tbody>
                {
                    rows.map((rowData, rowIndex) => this.renderRow(rowData, rowIndex, columns))
                }
                </tbody>
                <tfoot>
                <tr>
                    <td>
                        <IconButton onClick={parameterizedHandler(rows.length, this.props.addRow)} style={{marginTop: "5px", padding: "0", border: "0.5px solid #ccc"}}>
                            <Add fontSize="small"></Add>
                        </IconButton>
                    </td>
                    <td></td>
                    <td colSpan={columns.length}></td>
                    <td>
                        <IconButton style={{margin: "5px 0 0 5px", padding: "0", border: "0.5px solid #ccc"}}>
                            <SvgIcon fontSize="small">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1}
                                    stroke="currentColor"
                                >
                                    <path d="M17 7 V17 H7"/>
                                </svg>
                            </SvgIcon>
                        </IconButton>
                    </td>
                </tr>
                </tfoot>
            </table>
            {this.renderContextMenu()}
        </div>;
    }

    private renderContextMenu() {
        return <Menu
            open={this.state.contextMenuPosition !== undefined}
            onClose={this.handleClose}
            anchorReference="anchorPosition"
            anchorPosition={
                this.state.contextMenuPosition !== undefined
                    ? {top: this.state.contextMenuPosition.y, left: this.state.contextMenuPosition.x}
                    : undefined
            }
        >
            {
                this.state.contextMenuEntries.length == 0
                    ? <MenuItem disabled={true}>No entries</MenuItem>
                    : this.state.contextMenuEntries.map((entry) => {
                    return <MenuItem disabled={entry.action == undefined} onClick={() => {
                        if (entry.action) parseHandler(entry.action)();
                        this.handleClose();
                    }}>{entry.label}</MenuItem>
                })
            }
        </Menu>;
    }

    private renderRow(rowData: RowData, rowIndex: number, columns: Column[]) {
        return <tr key={rowData.key}>
            <td
                className={styles.rowNumber}
                onContextMenu={(e) => this.handleContextMenu(e, rowData.actions)}
            >{rowIndex + 2}</td>
            <td className={styles.rowNumberSpacer}></td>
            {columns.map((column) => this.renderContentCell(rowData, column))}
        </tr>;
    }

    private renderContentCell(rowData: RowData, column: Column) {
        let cellData = rowData.cells?.[column.name];
        let content = cellData == undefined ? "" : typeof cellData === "string" ? cellData : cellData.value
        if (content == undefined || typeof content === "string") {
            let handler = cellData === undefined ? undefined : typeof cellData === "string"
                ? undefined
                : cellData.onChange
            let parsedHandler = parseHandler(handler);
            return <SpreadsheetCell
                key={column.name + "-" + rowData.key}
                text={content ?? ""}
                onTextChange={parsedHandler}
                className={styles.contentCell}
            />;
        } else {
            return <td className={styles.contentCell}>
                { createComponentFromJson(content) }
            </td>
        }
    }
}

function parseHandler<T>(handler: T): T {
    // TODO eval should happen before passing it to this component
    return typeof handler === "object" && typeof (handler as any).jsCode === "string" ? eval((handler as any).jsCode) : handler;
}

function parameterizedHandler<P>(parameter: P, handler?: (p: P) => void): (() => void) | undefined {
    if (handler == undefined) return undefined
    return () => parseHandler(handler)(parameter)
}
