import { DigitalOBDIISensorTile, SingleAudioFileTile, CastTile } from '../../core';
import { TileType } from './tile_type';
export abstract class TileBase{
    constructor(public type: TileType){

    }
    id: number;
    name: string;
    description: string;
    grabs_audio: boolean;
    grabs_video: boolean;

    public static getTile(type: TileType, fromTile?: TileBase): TileBase {
        let ret: TileBase = null;
        switch(type) {
            case TileType.single_audio_file:
                ret = new SingleAudioFileTile();
            case TileType.digital_obd_ii_sensor:
                ret = new DigitalOBDIISensorTile();
            case TileType.cast:
                ret = new CastTile();
        }
        if(ret && fromTile) {
            ret = Object.assign(ret, fromTile);
        }
        return ret;
    }
}