import { TileBase } from '../tiles/tile_base';
import { MessageBase } from './message_base';
import { MessageType } from "./message_type";

export class SongStatusMessage extends MessageBase
{     
    constructor(public tile?: TileBase, public durationPlaying?: number) {
        super(MessageType.songStatus);
    }
}