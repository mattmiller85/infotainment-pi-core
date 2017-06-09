import { TileType } from './tile_type';
import { TileBase } from './tile_base';

export class SingleAudioFileTile extends TileBase{    
    constructor(){
        super(TileType.single_audio_file);
        this.grabs_audio = true;
        this.grabs_video = true;        
    }
    
    path_to_audio: string;
}