// This replaces console.log in your app.
export function log(...args) {
    if (process.env.NODE_ENV === "production") {
        return;
    }

    console.log(...args);
}
