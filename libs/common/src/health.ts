export interface HealthPayload {
  status: 'ok';
  service: string;
  timestamp: string;
}

export function buildHealthPayload(service: string): HealthPayload {
  return {
    status: 'ok',
    service,
    timestamp: new Date().toISOString(),
  };
}
