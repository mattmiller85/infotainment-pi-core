import { MessageBase } from './message_base';
import { MessageType } from "./message_type";

export class PauseCurrentAudioFileMessage extends MessageBase
{     
    constructor() {
        super(MessageType.pauseAudioFile);
    }
}