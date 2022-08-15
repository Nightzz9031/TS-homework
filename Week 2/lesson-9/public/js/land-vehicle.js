import Vehicle from "./vehicle.js";
class LandVehicle extends Vehicle {
    tires;
    constructor({ tires }, vehicleProps) {
        super(vehicleProps);
        this.tires = tires;
    }
    toString = () => {
        return `${this.getString()}\tpadangos: ${this.tires.join(', ')}`;
    };
}
export default LandVehicle;
