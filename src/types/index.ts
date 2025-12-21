import { Request } from 'express';
/**
 * Type definitions for the secure microservice
 */

export interface MicroserviceEvent {
  id: string;
  type: string;
  source: string;
  timestamp: Date;
  data: any;
  metadata?: {
    clientId?: string;
    userId?: string;
    correlationId?: string;
    retryCount?: number;
    version?: string;
    [key: string]: any;
  };
}

export interface EventSubscription {
  eventType: string;
  handler: (event: MicroserviceEvent) => Promise<void>;
  retryPolicy?: RetryPolicy;
}

export interface RetryPolicy {
  maxRetries: number;
  retryDelayMs: number;
  backoffMultiplier: number;
}

export interface ServiceEndpoint {
  id: string;
  url: string;
  clientId: string;
  secret?: string;
  eventTypes: string[];
  active: boolean;
}

export interface AuthenticatedRequest extends Request {
  user?: JWTPayload;
  clientId?: string;
  requestId?: string;
}

export interface JWTPayload {
  userId: string;
  clientId: string;
  permissions: string[];
  exp?: number;
  iat?: number;
}

export interface ApiResponse<T = any> {
  message?: string;
  data?: T;
  error?: string;
  requestId?: string;
  timestamp?: string;
}

export interface EventResponse extends ApiResponse {
  eventType: string;
}

export interface MetricsResponse extends ApiResponse {
  events: {
    totalSubscriptions: number;
    eventTypesSubscribed: number;
    registeredServices: number;
    activeServices: number;
    eventHistorySize: number;
    queueSize: number;
  };
  process: {
    uptime: number;
    memory: NodeJS.MemoryUsage;
    cpu: NodeJS.CpuUsage;
    version: string;
  };
}

export interface HealthResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
  memory: NodeJS.MemoryUsage;
  version: string;
  environment: string;
}

export interface EventHistoryResponse extends ApiResponse {
  events: MicroserviceEvent[];
  count: number;
  limit: number;
  eventType?: string;
}

export interface ServicesResponse extends ApiResponse {
  services: Array<{
    id: string;
    url: string;
    clientId: string;
    eventTypes: string[];
    active: boolean;
    hasSecret: boolean;
  }>;
  count: number;
}

export interface ErrorResponse {
  error: string;
  message: string;
  requestId?: string;
  details?: any[];
  stack?: string;
}

// Configuration types
export interface AppConfig {
  server: {
    port: number;
    host: string;
    environment: string;
  };
  security: {
    jwtSecret: string;
    hmacSecret: string;
    allowedClientIds: string[];
    allowedOrigins: string[];
    tokenExpiry: string;
  };
  rateLimit: {
    windowMs: number;
    maxRequests: number;
    authWindowMs: number;
    authMaxAttempts: number;
  };
  logging: {
    level: string;
    directory: string;
  };
  events: {
    maxHistorySize: number;
    queueProcessingIntervalMs: number;
    retryPolicy: RetryPolicy;
  };
  services: {
    defaultTimeout: number;
    healthCheckInterval: number;
  };
}

// Client types for external usage
export interface ClientConfig {
  baseUrl: string;
  clientId: string;
  jwtToken?: string;
  hmacSecret?: string;
  timeout?: number;
}

export interface SendEventOptions {
  type: string;
  data: any;
  source?: string;
  metadata?: Record<string, any>;
}

export interface ClientResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  requestId?: string;
}

// Event type constants
export const EventTypes = {
  USER_CREATED: 'user.created',
  USER_UPDATED: 'user.updated', 
  USER_DELETED: 'user.deleted',
  ORDER_PLACED: 'order.placed',
  ORDER_CONFIRMED: 'order.confirmed',
  ORDER_SHIPPED: 'order.shipped',
  ORDER_DELIVERED: 'order.delivered',
  PAYMENT_PROCESSED: 'payment.processed',
  PAYMENT_FAILED: 'payment.failed',
  SYSTEM_HEALTH: 'system.health',
  SYSTEM_ERROR: 'system.error',
  LEGACY_EVENT: 'legacy.event'
} as const;

export type EventType = typeof EventTypes[keyof typeof EventTypes];

// Permission constants
export const Permissions = {
  READ_EVENTS: 'read:events',
  WRITE_EVENTS: 'write:events',
  READ_METRICS: 'read:metrics',
  READ_SERVICES: 'read:services',
  ADMIN_SERVICES: 'admin:services'
} as const;

export type Permission = typeof Permissions[keyof typeof Permissions];