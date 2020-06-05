import * as MicroEditorEnvelope from "@kogito-tooling/microeditor-envelope";
import { EnvelopeBusInnerMessageHandler } from "@kogito-tooling/microeditor-envelope";
import { SimpleReactEditorsLanguageData } from "./SimpleReactEditorsLanguageData";
import { SimpleReactEditorInterface } from "./SimpleReactEditorInterface";
import { LanguageData } from "@kogito-tooling/core-api";
export declare class SimpleReactEditorsFactory implements MicroEditorEnvelope.EditorFactory<SimpleReactEditorsLanguageData> {
    createEditor(languageData: LanguageData, messageBus: EnvelopeBusInnerMessageHandler): Promise<SimpleReactEditorInterface>;
}
