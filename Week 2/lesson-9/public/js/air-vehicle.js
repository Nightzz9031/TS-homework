import Vehicle from "./vehicle.js";
class AirVehicle extends Vehicle {
    maxAltitude;
    constructor({ maxAltitude }, vehicleProps) {
        super(vehicleProps);
        this.maxAltitude = maxAltitude;
    }
    toString = () => {
        return `${this.getString()}\tmaksimalus aukštis: ${this.maxAltitude}`;
    };
}
export default AirVehicle;
