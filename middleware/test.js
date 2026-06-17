import { isMainThread } from 'worker_threads';
import ro from './requireObject.js';

export default function testMiddleware() {
    ro();
}

if (!isMainThread) {
    testMiddleware();
}
