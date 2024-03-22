interface planetType {
  name: string;
  distance: number;
}

interface vehicleType {
  name: string;
  total_no: number;
  max_distance: number;
  speed: number;
}

interface requestBodyType {
  token: string;
  planet_names: string[];
  vehicle_names: string[];
}

interface fetchTokenResponseType {
  token: string;
}

interface findFalconeResponseType {
  planet_name: string;
  status: string;
}
