export const ROOMHUB_EVENTS_EXCHANGE = 'roomhub.events' as const;

export const RoutingKeys = {
  BOOKING_CREATED: 'booking.created',
  DEPOSIT_PAID: 'deposit.paid',
  BOOKING_CONFIRMED: 'booking.confirmed',
  BOOKING_CANCELLED: 'booking.cancelled',
  VIEWING_SCHEDULED: 'viewing.scheduled',
} as const;

export type RoutingKey = (typeof RoutingKeys)[keyof typeof RoutingKeys];

export interface BookingCreatedEvent {
  bookingId: string;
  roomId: string;
  tenantId: string;
  landlordId: string;
  status: 'PENDING' | 'DEPOSIT_PENDING';
  holdExpiresAt: string | null;
}

export interface DepositPaidEvent {
  bookingId: string;
  paymentId: string;
  orderCode: number;
  amount: number;
  paidAt: string;
}

export interface BookingConfirmedEvent {
  bookingId: string;
  roomId: string;
  landlordId: string;
  firstMonthRent: number;
  confirmedAt: string;
}

export interface BookingCancelledEvent {
  bookingId: string;
  roomId: string;
  reason: string;
  cancelledBy: string;
}

export interface ViewingScheduledEvent {
  viewingSlotId: string;
  roomId: string;
  tenantId: string;
  landlordId: string;
  scheduledAt: string;
}
