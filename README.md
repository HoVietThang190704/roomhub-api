# roomhub-api

NestJS microservices monorepo cho nền tảng RoomHub.

## Danh sách service
- `api-gateway` (port `4000`)
- `identity-service` (port `4001`)
- `listing-service` (port `4002`)
- `booking-service` (port `4003`)
- `payment-service` (port `4004`)
- `notification-service` (port `4005`)

## Thư viện dùng chung
- `libs/common` (`@common`)
- `libs/contracts` (`@contracts`) — RabbitMQ exchange `roomhub.events` & payload contracts

## Khởi chạy local
```powershell
Copy-Item .env.example .env
pnpm install
pnpm prisma:generate
pnpm dev
```
