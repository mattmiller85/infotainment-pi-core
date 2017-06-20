import { MessageBase } from './message_base';
import { MessageType } from './message_type';

export class PlayAudioFileMessage extends MessageBase
{     
    constructor(public tile?: { path_to_audio:string, id: number }) {
        super(MessageType.playAudioFile);
    }
}