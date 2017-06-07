import { MessageBase } from './message_base';
import { MessageType } from "./message_type";

export class StopCurrentAudioFileMessage extends MessageBase
{     
    constructor() {
        super(MessageType.stopAudioFile);
    }
}