import Vehicle, { VehicleProps } from "./vehicle.js";

export type AirVehicleProps = {
  maxAltitude: number
}

class AirVehicle extends Vehicle {
  private maxAltitude: number;

  constructor({ maxAltitude }: AirVehicleProps, vehicleProps: VehicleProps) {
    super(vehicleProps);

    this.maxAltitude = maxAltitude;
  }

  public override toString = (): string => {
    return `${this.getString()} Maximum height: ${this.maxAltitude}`;
  };
}

export default AirVehicle;