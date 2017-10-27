import { TileType } from './tile_type';
import { TileBase } from './tile_base';

export class CastTile extends TileBase{    
    constructor(){
        super(TileType.cast);
        this.grabs_audio = true;
        this.grabs_video = true;        
    }
}