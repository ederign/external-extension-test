import * as React from "react";
import { EnvelopeBusInnerMessageHandler } from "@kogito-tooling/microeditor-envelope";
export interface Props {
    exposing: (s: SimpleReactEditor) => void;
    messageBus: EnvelopeBusInnerMessageHandler;
}
export interface State {
    content: string;
    originalContent: string;
}
export declare class SimpleReactEditor extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    setContent(content: string): Promise<void>;
    private updateContent;
    getContent(): Promise<string>;
    isDirty(): boolean;
    render(): JSX.Element;
}
