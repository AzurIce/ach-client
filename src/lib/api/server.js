import { get, postByJson } from "../utils/axios";

export function getServerList() {
    return get('/api/servers')
}

export function consolePost(msg) {
    return postByJson('/api/servers/console', {data: msg})
}
