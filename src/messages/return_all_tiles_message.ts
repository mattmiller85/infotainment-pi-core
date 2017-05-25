import { MessageBase } from './message_base';
import { MessageType } from "./message_type";

export class ReturnAllTilesMessage extends MessageBase
{
    constructor() {
        super(MessageType.allTiles);
    }
}