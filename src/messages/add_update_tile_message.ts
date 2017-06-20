import { TileBase } from '../tiles/tile_base';
import { MessageBase } from './message_base';
import { MessageType } from './message_type';

export class AddUpdateTileMessage extends MessageBase
{
    constructor(public tile?: TileBase) {
        super(MessageType.addUpdateTile);
    }
}