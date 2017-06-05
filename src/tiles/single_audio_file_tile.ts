import { TileType } from './tile_type';
import { TileBase } from './tile_base';

export class SingleAudioFileTile extends TileBase{    
    constructor(){
        super();
    }

    get type(): TileType { return TileType.single_audio_file; };

    get grabs_audio(): boolean { return true; };
    get grabs_video(): boolean { return true; };

    path_to_audio: string;
}