// Tipos para geocercas
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface GeocercaPolygon {
  id: string;
  name: string;
  coordinates: Coordinates[];
  area: number; // em hectares
  animals: number;
  status: 'Ativo' | 'Inativo';
  createdAt: string;
  lastUpdate: string;
  color: string;
}

export interface DrawnLayer {
  type: 'polygon' | 'marker';
  layer: any;
  data?: {
    name?: string;
    coordinates: Coordinates[];
  };
}

export interface MapState {
  geocercas: GeocercaPolygon[];
  selectedGeocerca: GeocercaPolygon | null;
  isDrawing: boolean;
  drawMode: 'polygon' | 'marker' | null;
}
