import { TileType } from './tile_type';
import { TileBase } from './tile_base';

export class DigitalOBDIISensorTile extends TileBase{    
    constructor(){
        super(TileType.digital_obd_ii_sensor);
        this.grabs_audio = false;
        this.grabs_video = true;        
    }
    
    sensor_number: number;
    sensor_code: string;

    calculate_value(raw_value: any): number 
    {
        return raw_value;
    }
}
