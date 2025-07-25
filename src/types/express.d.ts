import { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            userId?: string;
            user?: string | JwtPayload;
        }
    }
}
