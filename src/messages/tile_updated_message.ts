import { TileBase } from '../tiles/tile_base';
import { MessageBase } from './message_base';
import { MessageType } from './message_type';

export class TileUpdatedMessage extends MessageBase
{
    constructor(public tile?: TileBase, public add_update_type?: string) {
        super(MessageType.tileUpdated);
    }
}