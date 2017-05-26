import { TileBase } from '../tiles/tile_base';
import { MessageBase } from './message_base';
import { MessageType } from "./message_type";

export class ReturnAllTilesMessage extends MessageBase
{
    tiles: TileBase[];

    constructor(tiles?: TileBase[]) {
        super(MessageType.allTiles);
        this.tiles = tiles;
    }
}