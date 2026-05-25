'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet-geometryutil';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { GeocercaPolygon, Coordinates } from '@/types/geocerca';

interface SimpleGeocercaMapProps {
  geocercas: GeocercaPolygon[];
  onGeocercaCreate?: (geocerca: GeocercaPolygon) => void;
  onGeocercaSelect?: (geocerca: GeocercaPolygon | null) => void;
  selectedGeocerca?: GeocercaPolygon | null;
}

const COLORS = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#FFA07A',
  '#98D8C8',
  '#F7DC6F',
  '#BB8FCE',
  '#85C1E2',
];

// Função para calcular área em hectares usando haversine
function calculateArea(coordinates: Coordinates[]): number {
  if (coordinates.length < 3) return 0;

  const R = 6371000; // Raio da Terra em metros
  let area = 0;

  for (let i = 0; i < coordinates.length; i++) {
    const p1 = coordinates[i];
    const p2 = coordinates[(i + 1) % coordinates.length];

    const lat1 = (p1.lat * Math.PI) / 180;
    const lat2 = (p2.lat * Math.PI) / 180;
    const dLng = ((p2.lng - p1.lng) * Math.PI) / 180;

    area += ((dLng * (2 + Math.sin(lat1) + Math.sin(lat2))) / 2) * R * R;
  }

  const hectares = Math.round(Math.abs(area) / 10000 * 100) / 100;
  return hectares;
}

export function SimpleGeocercaMap({
  geocercas,
  onGeocercaCreate,
  onGeocercaSelect,
  selectedGeocerca,
}: SimpleGeocercaMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const drawnItems = useRef<L.FeatureGroup | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;

    // Inicializar mapa
    map.current = L.map(mapContainer.current).setView([-15.7939, -47.8822], 4);

    // Tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Feature group para elementos desenhados
    drawnItems.current = new L.FeatureGroup();
    map.current.addLayer(drawnItems.current);

    setIsLoaded(true);

    // Importar leaflet-draw após o mapa estar carregado
    import('leaflet-draw').then(() => {
      if (map.current) {
        const drawControl = new (L as any).Control.Draw({
          edit: {
            featureGroup: drawnItems.current,
          },
          draw: {
            polygon: true,
            polyline: false,
            rectangle: false,
            circle: false,
            marker: false,
            circlemarker: false,
          },
        });
        map.current.addControl(drawControl);
      }
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // Adicionar geocercas existentes
  useEffect(() => {
    if (!map.current || !drawnItems.current) return;

    // Limpar camadas antigas
    drawnItems.current.clearLayers();

    geocercas.forEach((geocerca, index) => {
      if (geocerca.coordinates.length > 0) {
        const latlngs = geocerca.coordinates.map((c) => [c.lat, c.lng] as [number, number]);
        const color = COLORS[index % COLORS.length];

        const polygon = L.polygon(latlngs, {
          color: color,
          fillColor: color,
          fillOpacity: selectedGeocerca?.id === geocerca.id ? 0.4 : 0.2,
          weight: selectedGeocerca?.id === geocerca.id ? 3 : 2,
        })
          .bindPopup(
            `<div class="font-semibold">${geocerca.name}</div>
             <div class="text-sm text-gray-600">${geocerca.area} ha</div>
             <div class="text-sm text-gray-600">${geocerca.animals} animais</div>`
          )
          .on('click', () => {
            onGeocercaSelect?.(geocerca);
          })
          .addTo(drawnItems.current!);
      }
    });
  }, [geocercas, selectedGeocerca, onGeocercaSelect]);

  // Handlers para eventos de desenho
  useEffect(() => {
    if (!map.current) return;

    const handleDrawCreated = (e: any) => {
      const { layerType, layer } = e;

      if (layerType === 'polygon' && drawnItems.current) {
        // Extrair coordenadas
        const latlngs = (layer as L.Polygon).getLatLngs()[0];
        const coordinates: Coordinates[] = latlngs.map((latlng) => ({
          lat: latlng.lat,
          lng: latlng.lng,
        }));

        // Calcular área em hectares
        const hectares = calculateArea(coordinates);

        // Criar geocerca
        const newGeocerca: GeocercaPolygon = {
          id: Date.now().toString(),
          name: `Geocerca ${geocercas.length + 1}`,
          coordinates,
          area: hectares,
          animals: 0,
          status: 'Ativo',
          createdAt: new Date().toISOString(),
          lastUpdate: new Date().toISOString(),
          color: COLORS[geocercas.length % COLORS.length],
        };

        onGeocercaCreate?.(newGeocerca);

        // Colorir e remover do mapa de desenho
        (layer as L.Polygon).setStyle({
          color: newGeocerca.color,
          fillColor: newGeocerca.color,
        });
        drawnItems.current.removeLayer(layer);
      }
    };

    map.current.on('draw:created', handleDrawCreated);

    return () => {
      map.current?.off('draw:created', handleDrawCreated);
    };
  }, [geocercas, onGeocercaCreate]);

  return (
    <div className="relative w-full">
      <div
        ref={mapContainer}
        className="w-full h-[600px] rounded-lg border border-brand-100 overflow-hidden"
      />

      {selectedGeocerca && (
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs z-[999]">
          <div className="flex items-start gap-3">
            <div
              className="w-4 h-4 rounded flex-shrink-0 mt-1"
              style={{ backgroundColor: selectedGeocerca.color }}
            />
            <div className="flex-1">
              <h3 className="font-bold text-dark mb-2">{selectedGeocerca.name}</h3>
              <div className="space-y-1 text-sm">
                <div>
                  <span className="text-dark/60">Área:</span>
                  <span className="text-dark font-medium ml-2">{selectedGeocerca.area} ha</span>
                </div>
                <div>
                  <span className="text-dark/60">Animais:</span>
                  <span className="text-dark font-medium ml-2">{selectedGeocerca.animals}</span>
                </div>
                <div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      selectedGeocerca.status === 'Ativo'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {selectedGeocerca.status}
                  </span>
                </div>
                <div className="text-xs text-dark/40 mt-2">
                  Atualizado: {new Date(selectedGeocerca.lastUpdate).toLocaleDateString('pt-BR')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 max-w-sm z-[999] text-sm">
        <p className="font-medium text-dark mb-2">✏️ Desenhar Geocerca</p>
        <p className="text-dark/60 text-xs">
          Clique no ícone de polígono no canto superior direito para desenhar uma nova geocerca no mapa.
        </p>
      </div>
    </div>
  );
}
