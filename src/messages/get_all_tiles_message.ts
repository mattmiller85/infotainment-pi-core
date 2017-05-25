import { MessageBase } from './message_base';
import { MessageType } from "./message_type";

export class GetAllTilesMessage extends MessageBase
{
    constructor() {
        super(MessageType.askForAllTiles);
    }
}