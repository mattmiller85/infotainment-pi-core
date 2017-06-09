import { TileType } from './tile_type';
export abstract class TileBase{
    constructor(public type: TileType){

    }
    id: number;
    name: string;
    description: string;
    grabs_audio: boolean;
    grabs_video: boolean;
}