import * as core from '../core';
import { expect } from 'chai';
import 'mocha';

describe('MessageReader', () => {

    it('should throw if given unexpected MessageType', () => {
        expect(() => new core.MessageReader().getMessage({ type: 'unknown' })).to.throw("Unhandled message type undefined!");
    });

    it('should throw if given unexpected type', () => {
        expect(() => new core.MessageReader().getMessage(4)).to.throw("Unhandled message type undefined!");
    });

    it('should return GreetingMessage when given MessageType.greetingFromServer as JSON string', () => {
        let message = new core.MessageReader().getMessage("{ \"type\": 1 }")
        expect(message).to.be.instanceof(core.GreetingMessage);
    });

    it('should return GreetingMessage when given MessageType.greetingFromServer', () => {
        let message = new core.MessageReader().getMessage({ type: core.MessageType.greetingFromServer })
        expect(message).to.be.instanceof(core.GreetingMessage);
    });

    it('should return ReturnAllTilesMessage when given MessageType.allTiles', () => {
        let message = new core.MessageReader().getMessage({ type: core.MessageType.allTiles })
        expect(message).to.be.instanceof(core.ReturnAllTilesMessage);
    });

    it('should return GetAllTilesMessage when given MessageType.askForAllTiles', () => {
        let message = new core.MessageReader().getMessage({ type: core.MessageType.askForAllTiles })
        expect(message).to.be.instanceof(core.GetAllTilesMessage);
    });
});