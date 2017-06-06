import { MessageBase } from './message_base';
import { MessageType } from "./message_type";

export class GetTileByIdMessage extends MessageBase
{   
    constructor(public id?: number) {
        super(MessageType.getTileById);
    }
}