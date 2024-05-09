export function convertWindSpeed(speedInMetersPerSecont: number): string {
  const speedInKilometersPerHour = speedInMetersPerSecont * 3.6;
  return `${speedInKilometersPerHour.toFixed(0)}km/h`;
}
