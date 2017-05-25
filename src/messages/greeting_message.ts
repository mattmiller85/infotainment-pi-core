import { MessageBase } from './message_base';
import { MessageType } from "./message_type";

export class GreetingMessage extends MessageBase
{
    constructor() {
        super(MessageType.greetingFromServer);
    }
}