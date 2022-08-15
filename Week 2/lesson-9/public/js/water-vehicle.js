import Vehicle from "./vehicle.js";
class WaterVehicle extends Vehicle {
    maxDepth;
    constructor({ maxDepth }, vehicleProps) {
        super(vehicleProps);
        this.maxDepth = maxDepth;
    }
    toString = () => {
        return `${this.getString()}\tmaksimalus gylis: ${this.maxDepth}`;
    };
}
export default WaterVehicle;
