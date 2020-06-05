import { Editor, Element } from "@kogito-tooling/core-api";
import { EnvelopeBusInnerMessageHandler } from "@kogito-tooling/microeditor-envelope";
export declare class SimpleReactEditorInterface extends Editor {
    private readonly messageBus;
    private self;
    constructor(messageBus: EnvelopeBusInnerMessageHandler);
    getContent(): Promise<string>;
    getPreview(): Promise<string>;
    isDirty(): boolean;
    setContent(path: string, content: string): Promise<void>;
    af_componentRoot(): Element;
}
