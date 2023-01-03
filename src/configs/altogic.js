import { createClient } from "altogic";

// This `envUrl` and `clientKey` is sample you need to create your own.
const envUrl = "https://c1-india.altogic.com/e:63b457ffe1ef4736651c583f";
export const clientKey = "8117b76b32e94611876a50663e055722";

const altogic = createClient(envUrl, clientKey, {
  // signInRedirect: "/sign-in",
});

export const { db, auth, storage, endpoint, queue, realtime, cache } = altogic;
