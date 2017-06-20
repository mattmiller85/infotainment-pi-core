import { MessageBase } from './message_base';
import { MessageType } from './message_type';
import { DigitalOBDIISensorTile } from '../tiles/digital_obd_II_sensor_tile';

export class OBDReadingMessage extends MessageBase
{
    constructor(public tile?: DigitalOBDIISensorTile, public value?: number) {
        super(MessageType.obdReading);
    }
}