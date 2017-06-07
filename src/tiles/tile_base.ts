import { TileType } from './tile_type';
export abstract class TileBase{
    id: number;
    abstract get type(): TileType;
    get routing(): string {
        return `tile/${this.id}`;
    };
    name: string;
    description: string;
    abstract get grabs_audio(): boolean;
    abstract get grabs_video(): boolean;
}